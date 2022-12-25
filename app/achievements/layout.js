import { Heading, Stack, Text } from "@app-providers/chakra-ui";

function AchievementsLayout({ children }) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Achievements</Heading>
        <Text as="h2" lineHeight="tall">
          Here are some of the accomplishment on my journey to becoming a developer.
        </Text>
      </Stack>

      {children}
    </Stack>
  );
}

export default AchievementsLayout;
