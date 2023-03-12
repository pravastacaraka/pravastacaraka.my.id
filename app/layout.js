import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import { _app_metadata } from "@app-config/app.config";
import { ChakraWrapper, Container } from "@app-providers/chakra-ui";
import { Analytics } from "@app-providers/vercel";

export const metadata = _app_metadata;

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
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
