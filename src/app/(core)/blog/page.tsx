import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { Center, Stack } from "ui/common/providers/theme.provider";

function Page() {
  return (
    <Stack spacing={4} textAlign="center">
      <Center
        h={{
          base: "calc(100vh - 30rem)",
          xs: "calc(100vh - 30rem + 35px)",
          sm: "calc(100vh - 30rem + 81px)",
          md: "calc(100vh - 30rem - 4px)",
        }}
      >
        <CustomReactMarkdown>Don&apos;t have any posts.</CustomReactMarkdown>
      </Center>
    </Stack>
  );
}

export default Page;
