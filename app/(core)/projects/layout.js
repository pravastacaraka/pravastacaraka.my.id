import { Heading, Stack, Text } from "@app-providers/chakra-ui";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Recent Projects",
  description: `Here are some of my past works from personal projects and open source ones.`,
};

function ProjectsLayout({ children }) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Projects</Heading>
        <Text as="h2">Here are some of my past works from personal projects and open source ones.</Text>
      </Stack>
      {children}
    </Stack>
  );
}

export default ProjectsLayout;
