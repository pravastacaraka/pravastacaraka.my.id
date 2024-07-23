import { Footer, Header } from "ui/common/components/layout";
import MobileMenu from "ui/common/components/layout/MobileMenu/MobileMenu";
import { Container } from "ui/common/providers/theme.provider";
import { Analytics } from "ui/common/providers/vercel.provider";

function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Container as="main" display="grid" px={4} py={{ base: 4, md: 8 }}>
        {children}
        <Analytics />
      </Container>
      <Footer />
      <MobileMenu />
    </>
  );
}

export default CoreLayout;
