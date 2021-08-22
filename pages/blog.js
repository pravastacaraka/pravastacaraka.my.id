import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

function BlogPage({ posts }) {
  const pageMeta = {
    title: "Blog",
    description: "Sometimes I write about web development, other times about random interesting stuff.",
  };
  return (
    <Stack
      as="section"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 200px)",
      }}
      spacing={8}
    >
      <Head>
        <title>{pageMeta.title} - Pravasta Caraka</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Posts</Heading>
        <Text as="h2">{pageMeta.description}</Text>
      </Stack>

      {posts ? (
        <></>
      ) : (
        <Stack spacing={4} textAlign="center">
          <Center minH="calc(100vh - var(--chakra-space-32) - 315px)">
            <Text>Don't have any posts.</Text>
          </Center>
        </Stack>
      )}
    </Stack>
  );
}

export default BlogPage;
