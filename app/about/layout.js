import { Stack } from "@app-providers/chakra-ui";

function AboutLayout({ children }) {
  return (
    <Stack as="section" spacing={4}>
      {children}
    </Stack>
  );
}

export default AboutLayout;
