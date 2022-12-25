import { Heading, Stack, Text } from "@app-providers/chakra-ui";
import Projects from "./Projects";

function Page() {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Projects</Heading>
        <Text as="h2" lineHeight="tall">
          Here are some of my past works from personal projects and open source ones.
        </Text>
      </Stack>
      <Stack spacing={4}>
        <Projects />
      </Stack>
    </Stack>
  );
}

export default Page;
