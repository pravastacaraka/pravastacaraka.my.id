import { BaseMarkdown } from "@app-components/markdown";
import { getTable } from "@app-libs/airtable";
import { AspectRatio, Center, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const about = await getTable("About Me");
  return {
    props: {
      about: about[0],
    },
    revalidate: 60,
  };
}

function About({ about }) {
  const pageMeta = {
    title: "About Me",
    description: "Get to know more about myself.",
  };
  return (
    <Center
      as="section"
      flexDir="column"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 168px)",
      }}
    >
      <Head>
        <title>{pageMeta.title} - Pravasta Caraka</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <AspectRatio w="full" ratio={16 / 9} mb={8}>
        <Image src={about.fields.cover_im[0].url} layout="fill" objectFit="cover" alt="Picture of the Author" />
      </AspectRatio>

      <Stack lineHeight="tall" mb={8} spacing={4}>
        <ReactMarkdown components={BaseMarkdown}>{about.fields.long_desc}</ReactMarkdown>
      </Stack>
    </Center>
  );
}

export default About;
