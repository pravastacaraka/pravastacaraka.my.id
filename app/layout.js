import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import { ChakraWrapper, Container } from "@app-providers/chakra-ui";
import { Analytics } from "@app-providers/vercel";

function RootLayout({ children }) {
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
          <MobileNavigation />
        </ChakraWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
