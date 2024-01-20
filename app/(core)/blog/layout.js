import { Heading, Stack, Text } from "@app-providers/chakra-ui";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Blog",
  description: `Sometimes I write about web development, other times about random interesting stuff.`,
};

function BlogLayout({ children }) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Recent Posts</Heading>
        <Text as="h2" lineHeight="tall">
          Sometimes I write about web development, other times about random interesting stuff.
        </Text>
      </Stack>

      {children}
    </Stack>
  );
}

export default BlogLayout;
