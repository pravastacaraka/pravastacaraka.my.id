import { getTable } from "@app-libs/airtable";
import {
  AspectRatio,
  Center,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/legacy/image";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  // fetch projects from airtable
  const projects = await getTable("Recent Projects", {
    sort: [{ field: "id", direction: "desc" }],
  });
  // fetch projects image blur data from plaiceholder
  const plaiceholders = await Promise.all(
    projects.map(async (item) => {
      const { base64, img } = await getPlaiceholder(item.fields?.images[0]?.url);
      return { base64, img };
    })
  ).then((values) => values);
  // return props
  return {
    props: {
      projects: projects,
      imgProps: plaiceholders.map(({ base64, img }) => ({
        blurDataURL: base64,
        src: img.src,
        type: img.type,
      })),
    },
    revalidate: 60,
  };
}

function ProjectsPage({ projects, imgProps }) {
  const pageMeta = {
    title: "Recent Projects",
    description: "Here are some of my past works from personal projects and open source ones.",
  };
  return (
    <Stack as="section" spacing={8}>
      <Head>
        <title>{`${pageMeta.title} - Pravasta Caraka`}</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <Stack align="center" spacing={4} textAlign="center">
        <Heading as="h1">{pageMeta.title}</Heading>
        <Text as="h2" lineHeight="tall" pb={8}>
          {pageMeta.description}
        </Text>

        {projects ? (
          <SimpleGrid columns={[1, 1, 2]} gap={4}>
            {projects.map((project, projectId) => (
              <LinkBox
                key={project.id}
                _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                bgColor="whiteAlpha.50"
                overflow="hidden"
                role="group"
                rounded="md"
                transform="auto-gpu"
                transitionDuration="slow"
                transitionProperty="transform"
                transitionTimingFunction="cubic-bezier(.175,.885,.32,1.275)"
              >
                <AspectRatio
                  ratio={16 / 9}
                  w={{ base: "343px", md: "424px" }}
                  _groupHover={{ filter: "blur(2px)" }}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    alt="Preview of the project"
                    placeholder="blur"
                    {...imgProps[projectId]}
                  />
                </AspectRatio>

                <Stack
                  _groupHover={{ opacity: 1 }}
                  align="center"
                  bgColor="blackAlpha.700"
                  inset={0}
                  justify="center"
                  opacity={0}
                  pos="absolute"
                  px={8}
                  py={4}
                  transitionDuration="normal"
                  transitionProperty="opacity"
                  transitionTimingFunction="cubic-bezier(.39,.575,.565,1)"
                >
                  <Heading size="md" color="white">
                    {project.fields.name}
                  </Heading>
                  <Text color="white" fontSize={["xs", "sm"]} noOfLines={2}>
                    {project.fields.desc}
                  </Text>
                  <LinkOverlay
                    href={project.fields.demo_url}
                    color="yellow.200"
                    fontSize={["xs", "sm"]}
                    noOfLines={1}
                    pb={4}
                    isExternal
                  >
                    {project.fields.demo_url?.replace(/https?:\/\//, "")}
                  </LinkOverlay>
                  <Wrap justify="center">
                    {project.fields.stack?.map((st) => (
                      <WrapItem key={st}>
                        <Tag size="sm" variant="subtle">
                          {st}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Stack>
              </LinkBox>
            ))}
          </SimpleGrid>
        ) : (
          <Stack spacing={4} textAlign="center">
            <Center
              h={{
                base: "calc(100vh - 30rem)",
                xs: "calc(100vh - 30rem + 20px)",
                sm: "calc(100vh - 30rem + 25px)",
                md: "calc(100vh - 30rem + 2px)",
              }}
            >
              <Text>Don&apos;t have any projects.</Text>
            </Center>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

export default ProjectsPage;
