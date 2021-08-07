import MobileNavigation from "@app-components/MobileNavigation";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }} minH="100vh">
        <Component {...pageProps} />
      </Box>
      <MobileNavigation />
    </ChakraProvider>
  );
}

export default MyApp;
