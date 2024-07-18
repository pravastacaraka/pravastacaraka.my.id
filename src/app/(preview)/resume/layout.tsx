import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Get to know more about my experiences.",
};

function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

export default ResumeLayout;
