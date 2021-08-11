import { ProjectCard } from "@app-components/Card";
import { Box, Button, Heading, Icon, Link as ChakraLink, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { getTable } from "libs/airtable";
import Head from "next/head";
import { HiOutlineChevronDown } from "react-icons/hi";

function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Pravasta Caraka</title>
      </Head>

      <VStack spacing={16} maxW="2xl" mx="auto" justify="center" alignItems="start">
        <Box as="section" w="full">
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight={{ base: "8", md: "none" }}
            letterSpacing="tight"
            mb={4}
          >
            Hey, I&apos;m Pravasta Caraka
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} lineHeight="1.75" maxW="65ch">
            I&apos;m a web and mobile developer enthusiast. Born and raised in Surabaya and now living in the
            Sidoarjo. You’ve found my personal slice of the internet, while you&apos;re here you can&nbsp;
            <ChakraLink href="/about" color="#3b82f6" _focus={{ border: "none" }} textDecoration="underline">
              learn more about me
            </ChakraLink>
            .
          </Text>
        </Box>

        <Box as="section" w="full">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "8", md: "10" }}
            letterSpacing="tight"
            mb={4}
          >
            Recent Projects
          </Heading>
          <VStack spacing={4}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.fields.name}
                desc={project.fields.desc}
                type={project.fields.type}
                img={project.fields.images[0].url}
                stack={project.fields.stack}
                demo_url={project.fields.demo_url}
              />
            ))}
          </VStack>
          <Button
            variant="ghost"
            d="flex"
            align="center"
            mx="auto"
            my={4}
            px={4}
            py={2}
            transition="all 0.2s ease-out"
            _hover={{ transform: "translateY(-2px)" }}
          >
            <Text rounded="lg" fontSize="sm" color={useColorModeValue("gray.900", "gray.100")}>
              See More&nbsp;
              <Icon as={HiOutlineChevronDown} boxSize={4} />
            </Text>
          </Button>
        </Box>
      </VStack>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  const projects = await getTable("Recent Projects", {
    sort: [{ field: "id", direction: "desc" }],
    maxRecords: 3,
  });
  return {
    props: {
      projects,
    },
    revalidate: 60 * 60, // 1 hour
  };
}
