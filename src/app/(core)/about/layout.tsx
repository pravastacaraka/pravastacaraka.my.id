import { Metadata } from "next";
import { Stack } from "ui/common/providers/theme.provider";

export const metadata: Metadata = {
  title: "About Me",
  description: "Get to know more about myself.",
};

function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack as="section" spacing={4}>
      {children}
    </Stack>
  );
}

export default AboutLayout;
