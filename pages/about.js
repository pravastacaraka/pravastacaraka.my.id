import { KnowledgeCard } from "@app-components/Card";
import { BaseMarkdown } from "@app-components/markdown";
import { getTable } from "@app-libs/airtable";
import { AspectRatio, SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const about = await getTable("About Me");
  const knowledges = await getTable("Knowledge Base", {
    sort: [{ field: "name", direction: "asc" }],
  });
  return {
    props: {
      about: about[0],
      knowledges: knowledges,
    },
    revalidate: 60,
  };
}

function About({ about, knowledges }) {
  const pageMeta = {
    title: "About Me",
    description: "Get to know more about myself.",
  };
  const languages = knowledges?.filter((knowledge) => knowledge.fields.type === "language");
  const frameworks = knowledges?.filter((knowledge) => knowledge.fields.type === "framework");
  const databases = knowledges?.filter((knowledge) => knowledge.fields.type === "database");
  const cms = knowledges?.filter((knowledge) => knowledge.fields.type === "cms");
  const tools = knowledges?.filter((knowledge) => knowledge.fields.type === "tool");
  const deployments = knowledges?.filter((knowledge) => knowledge.fields.type === "ci/cd");
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

      <Stack as="section" flexDir="column" spacing={8}>
        <AspectRatio w="full" ratio={16 / 9}>
          <Image src={about.fields?.cover_im[0].url} layout="fill" objectFit="cover" alt="Picture of the Author" />
        </AspectRatio>

        <Stack lineHeight="tall" spacing={4}>
          <ReactMarkdown components={BaseMarkdown}>{about.fields?.long_desc}</ReactMarkdown>
        </Stack>
      </Stack>

      <Stack as="section" flexDir="column" spacing={8}>
        {/* <Heading as="h1" size="lg" id="skills">
          Knowledge Base
        </Heading>
        <Stack lineHeight="tall" spacing={4}>
          <ReactMarkdown components={BaseMarkdown}>
            After a few years of being a computer engineering student and also learning something new on my own, I
            have a wide range of skills and knowledge about software development.
          </ReactMarkdown> */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={8} w="full">
          <KnowledgeCard data={languages} label="Languages" />
          <KnowledgeCard data={frameworks} label="Frameworks" />
          <KnowledgeCard data={databases} label="Databases" />
          <KnowledgeCard data={cms} label="Headless CMS" />
          <KnowledgeCard data={deployments} label="Deployments" />
          <KnowledgeCard data={tools} label="Tools" />
        </SimpleGrid>
        {/* </Stack> */}
      </Stack>

      <Stack as="section" flexDir="column" spacing={8}>
        <Stack lineHeight="tall" spacing={4}>
          <ReactMarkdown components={BaseMarkdown}>
            You can reach out via email at [raka@pravastacaraka.my.id](mailto:raka@pravastacaraka.my.id), or via
            socials below.
          </ReactMarkdown>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default About;
