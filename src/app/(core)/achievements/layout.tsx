import { Metadata } from "next";
import { Heading, Stack, Text } from "ui/common/providers/theme.provider";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Here are some of the accomplishment on my journey to becoming a developer.",
};

function AchievementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Achievements</Heading>
        <Text as="h2">Here are some of the accomplishment on my journey to becoming a developer.</Text>
      </Stack>
      {children}
    </Stack>
  );
}

export default AchievementsLayout;
