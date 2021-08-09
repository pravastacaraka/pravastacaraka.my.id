import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import customTheme from "@app-themes/default.theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Container as="main" pt={{ base: 8, md: 0 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Container>
      <MobileNavigation />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
