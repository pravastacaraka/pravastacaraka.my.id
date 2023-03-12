import { Stack } from "@app-providers/chakra-ui";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "About Me",
  description: `Get to know more about myself.`,
};

function AboutLayout({ children }) {
  return (
    <Stack as="section" spacing={4}>
      {children}
    </Stack>
  );
}

export default AboutLayout;
