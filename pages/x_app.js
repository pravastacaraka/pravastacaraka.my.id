import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  // // Next.js bug where page state is not reset
  // // issue: https://github.com/vercel/next.js/issues/9992
  // const { asPath } = useRouter();
  // return (
  //   <ChakraProvider theme={customTheme} resetCSS>
  //     <Head>
  //       <meta content="width=device-width, initial-scale=1" name="viewport" />
  //     </Head>
  //     <Flex className={inter.className} direction="column" minH={{ base: "calc(100vh - 60px)", md: "100vh" }}>
  //       <Header />
  //       <Container as="main" pt={{ base: 4, md: 8 }} pb={{ base: 4, md: 8 }} px={4}>
  //         <Component {...pageProps} key={asPath} />
  //         <Analytics />
  //       </Container>
  //       <Footer />
  //     </Flex>
  //     <MobileNavigation />
  //   </ChakraProvider>
  // );
}

export default MyApp;
