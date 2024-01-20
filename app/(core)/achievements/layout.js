import { Heading, Stack, Text } from "@app-providers/chakra-ui";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Achievements",
  description: `Here are some of the accomplishment on my journey to becoming a developer.`,
};

function AchievementsLayout({ children }) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center" lineHeight="tall">
        <Heading as="h1">Achievements</Heading>
        <Text as="h2">Here are some of the accomplishment on my journey to becoming a developer.</Text>
      </Stack>
      {children}
    </Stack>
  );
}

export default AchievementsLayout;
