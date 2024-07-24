import { Metadata } from "next";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { Heading, Stack, Text } from "ui/common/providers/theme.provider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Sometimes I write about web development, other times about random interesting stuff.",
};

function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Get in Touch</Heading>
      </Stack>

      <Stack spacing={4}>
        <Text as="h2">
          Are you looking for a discussion partner or someone you can trust to help with your application?
        </Text>
        <CustomReactMarkdown>
          If so, I am the right person and open for you to contact. There is no limit to contact me. There are
          several options that you can choose to chat, discuss, or just say hello.
        </CustomReactMarkdown>
      </Stack>

      {children}
    </Stack>
  );
}

export default ContactLayout;
