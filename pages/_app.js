import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import customTheme from "@app-styles/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // Next.js bug where page state is not reset - https://github.com/vercel/next.js/issues/9992
  const { asPath } = useRouter();
  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Container as="main" pt={{ base: 4, md: 8 }} pb={{ base: 8, md: 0 }} px={4}>
        <Component {...pageProps} key={asPath} />
      </Container>
      <Footer />
      <MobileNavigation />
    </ChakraProvider>
  );
}

export default MyApp;
