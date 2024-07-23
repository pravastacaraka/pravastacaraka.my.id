import { Metadata } from "next";
import { Heading, Stack, Text } from "ui/common/providers/theme.provider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sometimes I write about web development, other times about random interesting stuff.",
};

function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Posts</Heading>
        <Text as="h2">Sometimes I write about web development, other times about random interesting stuff.</Text>
      </Stack>
      {children}
    </Stack>
  );
}

export default BlogLayout;
