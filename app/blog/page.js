import { Center, Stack, Text } from "@app-providers/chakra-ui";

function Page() {
  const posts = null;
  return posts ? (
    <></>
  ) : (
    <Stack spacing={4} textAlign="center">
      <Center
        h={{
          base: "calc(100vh - 30rem)",
          xs: "calc(100vh - 30rem + 41px)",
          sm: "calc(100vh - 30rem + 87px)",
          md: "calc(100vh - 30rem + 2px)",
        }}
      >
        <Text>Don&apos;t have any posts.</Text>
      </Center>
    </Stack>
  );
}

export default Page;
