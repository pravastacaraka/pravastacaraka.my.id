"use client";

import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import { ChakraProvider, ColorModeScript, Container } from "@app-providers/chakra-ui";
import customTheme from "@app-styles/theme";
import { Analytics } from "@vercel/analytics/react";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Header />
          <Container as="main" display="grid" px={4} py={{ base: 4, md: 8 }}>
            {children}
            <Analytics />
          </Container>
          <Footer />
          <MobileNavigation />
        </ChakraProvider>
      </body>
    </html>
  );
}

export default RootLayout;
