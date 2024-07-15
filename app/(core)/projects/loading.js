import { CustomReactMarkdown } from "@app-components/markdown";
import { Spinner, Stack } from "@app-providers/chakra-ui";

const Loading = () => (
  <Stack
    h={{
      base: "calc(100vh - 30rem)",
      xs: "calc(100vh - 30rem + 35px)",
      sm: "calc(100vh - 30rem + 81px)",
      md: "calc(100vh - 30rem - 4px)",
    }}
    align="center"
    justify="center"
  >
    <Spinner size="xl" />
    <CustomReactMarkdown>Loading...</CustomReactMarkdown>
  </Stack>
);

export default Loading;
