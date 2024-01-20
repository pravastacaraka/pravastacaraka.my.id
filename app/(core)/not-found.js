import { NextChakraLink } from "@app-components/NextChakraLink";
import { Center, Heading } from "@app-providers/chakra-ui";

function NotFound() {
  return (
    <Center
      as="section"
      textAlign="center"
      flexDir="column"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 200px)",
      }}
    >
      <Heading as="h1" size="xl" maxW="lg">
        The page you’re looking for can’t be found.
      </Heading>
      <NextChakraLink href="/" mt={10}>
        Back to home
      </NextChakraLink>
    </Center>
  );
}

export default NotFound;
