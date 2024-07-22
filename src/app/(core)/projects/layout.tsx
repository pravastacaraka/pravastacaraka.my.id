import { Metadata } from "next";
import { Heading, Stack, Text } from "ui/common/providers/theme.provider";

export const metadata: Metadata = {
  title: "Recent Projects",
  description: "Here are some of my past works from personal projects and open source ones.",
};

function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
