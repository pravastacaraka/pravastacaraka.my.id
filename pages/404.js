import { NextChakraLink } from "@app-components/NextChakraLink";
import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

function NotFoundPage() {
  const pageMeta = {
    title: "Page Not Found",
    description: "The page you’re looking for can’t be found.",
  };
  return (
    <Center
      as="section"
      textAlign="center"
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
      <Heading as="h1" size="xl" maxW="lg">
        {pageMeta.description}
      </Heading>
      <NextChakraLink href="/" mt={10}>
        Back to home
      </NextChakraLink>
    </Center>
  );
}

export default NotFoundPage;
