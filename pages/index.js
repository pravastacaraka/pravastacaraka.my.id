import { ProjectCard, SkillCard } from "@app-components/Card";
import NextChakraLink from "@app-components/NextChakraLink";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { getTable } from "libs/airtable";
import Head from "next/head";
import { HiOutlineArrowNarrowRight, HiOutlineChevronDown } from "react-icons/hi";

function TitleH3({ children }) {
  return (
    <Heading
      as="h3"
      fontSize={{ base: "lg", md: "xl" }}
      fontWeight="medium"
      lineHeight="7"
      mb={2}
      color={useColorModeValue("gray.900", "gray.100")}
    >
      {children}
    </Heading>
  );
}

function Home({ projects, skills }) {
  const languages = skills.filter((skill) => skill.fields.type === "language");
  const frameworks = skills.filter((skill) => skill.fields.type === "framework");
  const databases = skills.filter((skill) => skill.fields.type === "database");
  const tools = skills.filter((skill) => skill.fields.type === "tool");
  const cicd = skills.filter((skill) => skill.fields.type === "ci/cd");
  return (
    <>
      <Head>
        <title>Pravasta Caraka</title>
      </Head>

      <Flex flexDir="column" maxW="2xl" mx="auto" justify="center" alignItems="start">
        <Box as="section" w="full" mb={16}>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight={{ base: "8", md: "none" }}
            letterSpacing="tight"
            mb={4}
          >
            Hey, I&apos;m Pravasta Caraka
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} lineHeight="1.75" maxW="65ch" mb={8}>
            I&apos;m a web and mobile developer enthusiast. Born and raised in Surabaya and now living in the
            Sidoarjo. You’ve found my personal slice of the internet, while you&apos;re here you can&nbsp;
            <ChakraLink href="/about" color="#3b82f6" _focus={{ border: "none" }} textDecoration="underline">
              learn more about me
            </ChakraLink>
            .
          </Text>
          <HStack>
            <NextChakraLink
              href="https://bit.ly/3xR1sbX"
              prefetch={false}
              isExternal
              color={useColorModeValue("black", "white")}
              _hover={{ color: useColorModeValue("black", "white") }}
            >
              <Button variant="outline" rightIcon={<Icon as={HiOutlineArrowNarrowRight} />}>
                Resume
              </Button>
            </NextChakraLink>
            <NextChakraLink
              href="/contact"
              prefetch={false}
              color={useColorModeValue("black", "white")}
              _hover={{ color: useColorModeValue("black", "white") }}
            >
              <Button variant="solid" bg={useColorModeValue("gray.100", "gray.800")}>
                Get in Touch
              </Button>
            </NextChakraLink>
          </HStack>
        </Box>

        <Box as="section" w="full" mb={8}>
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

        <Box as="section" w="full" mb={12}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "8", md: "10" }}
            letterSpacing="tight"
            mb={4}
          >
            Things I&apos;m Familiar With
          </Heading>
          <TitleH3>Languages</TitleH3>
          <SimpleGrid minChildWidth="120px" spacing={2} mb={8}>
            {languages?.map(({ id, fields }) => (
              <SkillCard key={id} {...fields} />
            ))}
          </SimpleGrid>
          <TitleH3>Frameworks</TitleH3>
          <SimpleGrid minChildWidth="120px" spacing={2} mb={8}>
            {frameworks?.map(({ id, fields }) => (
              <SkillCard key={id} {...fields} />
            ))}
          </SimpleGrid>
          <TitleH3>Databases</TitleH3>
          <SimpleGrid minChildWidth="120px" spacing={2} mb={8}>
            {databases?.map(({ id, fields }) => (
              <SkillCard key={id} {...fields} />
            ))}
          </SimpleGrid>
          <TitleH3>Tools</TitleH3>
          <SimpleGrid minChildWidth="120px" spacing={2} mb={8}>
            {tools?.map(({ id, fields }) => (
              <SkillCard key={id} {...fields} />
            ))}
          </SimpleGrid>
          <TitleH3>Deployments</TitleH3>
          <SimpleGrid minChildWidth="120px" spacing={2}>
            {cicd?.map(({ id, fields }) => (
              <SkillCard key={id} {...fields} />
            ))}
          </SimpleGrid>
        </Box>

        <Box as="section" w="full">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            lineHeight={{ base: "8", md: "10" }}
            letterSpacing="tight"
            mb={4}
          >
            Recent Posts
          </Heading>
          <HStack h={12} align="center">
            <Text>Coming soon...</Text>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}

export default Home;

export async function getStaticProps() {
  // get recent projects data
  const projects = await getTable("Recent Projects", {
    sort: [{ field: "id", direction: "desc" }],
    maxRecords: 3,
  });
  // get my skills data
  const skills = await getTable("Familiar Things", {
    sort: [{ field: "name", direction: "asc" }],
  });
  // return the fetched data
  return {
    props: {
      projects,
      skills,
    },
    revalidate: 60, // 1 minute
  };
}
