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
  return <main style={{ height: "100vh" }}>{children}</main>;
}

export default ResumeLayout;
