import { _app_metadata, _app_viewport } from "config/app.config";
import { Footer, Header } from "ui/common/components/layout";
import MobileMenu from "ui/common/components/layout/MobileMenu/MobileMenu";
import ChakraWrapper, { Container } from "ui/common/providers/theme.provider";
import { Analytics } from "ui/common/providers/vercel.provider";

export const metadata = _app_metadata;
export const viewport = _app_viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>
          <Header />
          <Container as="main" display="grid" px={4} py={{ base: 4, md: 8 }}>
            {children}
            <Analytics />
          </Container>
          <Footer />
          <MobileMenu />
        </ChakraWrapper>
      </body>
    </html>
  );
}
