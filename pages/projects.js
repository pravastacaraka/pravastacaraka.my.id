import { getTable } from "@app-libs/airtable";
import {
  AspectRatio,
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
import Image from "next/image";

export async function getStaticProps() {
  const res = await getTable("Recent Projects", {
    sort: [{ field: "id", direction: "desc" }],
  });
  return {
    props: {
      projects: res,
    },
    revalidate: 60,
  };
}

function ProjectsPage({ projects }) {
  const pageMeta = {
    title: "Recent Projects",
    description: "Here are some of my past works from personal projects and open source ones.",
  };
  console.log(projects);
  return (
    <Stack
      as="section"
      flexDir="column"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 168px)",
      }}
      spacing={8}
    >
      <Head>
        <title>{pageMeta.title} - Pravasta Caraka</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <Stack align="center" spacing={4} textAlign="center">
        <Heading as="h1">{pageMeta.title}</Heading>
        <Text as="h2" pb={8}>
          {pageMeta.description}
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          {projects.map((project) => (
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
              <AspectRatio ratio={16 / 9} w={{ base: "343px", md: "424px" }} _groupHover={{ filter: "blur(2px)" }}>
                <Image
                  src={project.fields.images[0]?.url}
                  layout="fill"
                  objectFit="cover"
                  alt="Preview of the project"
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
      </Stack>
    </Stack>
  );
}

export default ProjectsPage;
