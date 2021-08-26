import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

function BlogPage({ posts }) {
  const pageMeta = {
    title: "Blog",
    description: "Sometimes I write about web development, other times about random interesting stuff.",
  };
  return (
    <Stack as="section" spacing={8}>
      <Head>
        <title>{pageMeta.title} - Pravasta Caraka</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Posts</Heading>
        <Text as="h2" lineHeight="tall">
          {pageMeta.description}
        </Text>
      </Stack>

      {posts ? (
        <></>
      ) : (
        <Stack spacing={4} textAlign="center">
          <Center h="20vh">
            <Text>Don&apos;t have any posts.</Text>
          </Center>
        </Stack>
      )}
    </Stack>
  );
}

export default BlogPage;
