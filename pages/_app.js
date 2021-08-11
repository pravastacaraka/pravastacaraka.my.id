import Footer from "@app-components/Footer";
import Header from "@app-components/Header";
import MobileNavigation from "@app-components/MobileNavigation";
import customTheme from "@app-themes/default.theme";
import { ChakraProvider, Container } from "@chakra-ui/react";
import "@fontsource/inter/variable.css";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  // Next.js bug where page state is not reset - https://github.com/vercel/next.js/issues/9992
  const { asPath } = useRouter();
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Header />
      <Container as="main" pt={{ base: 8, md: 0 }} pb={{ base: 8, md: 16 }} px={8}>
        <Component {...pageProps} key={asPath} />
      </Container>
      <MobileNavigation />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
