import NextChakraLink from "@app-components/NextChakraLink";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import profilePic from "../public/static/images/avatar.webp";

function Home() {
  return (
    <Center as="section" flexDir="column" minH={`calc(100vh - var(--chakra-space-16) - 40px)`}>
      <Head>
        <title>Pravasta Caraka</title>
      </Head>
      <Box borderRadius="full" overflow="hidden" mx="auto" boxSize={{ base: 40, md: 48 }} mb={10}>
        <NextChakraLink href="/about" prefetch={false} _focus={{ boxShadow: "none" }}>
          <Image src={profilePic} alt="Picture of the Author" placeholder="blur" />
        </NextChakraLink>
      </Box>

      <Stack align="center" textAlign="center" spacing={4} mb={10}>
        <Heading as="h1" size="3xl">
          Hey, I&apos;m Pravasta Caraka.
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} fontSize={["lg", "xl"]} maxW="65ch">
          Web and mobile developer enthusiast. Currently based on Surabaya, Indonesia. You’ve found my personal
          slice of the internet, while you&apos;re here you can&nbsp;
          <ChakraLink href="/about">learn more about me</ChakraLink>.
        </Text>
      </Stack>

      <HStack justify="center">
        <NextChakraLink
          href="https://bit.ly/3xR1sbX"
          prefetch={false}
          isExternal
          color={useColorModeValue("black", "white")}
          _hover={{ color: useColorModeValue("black", "white") }}
        >
          <Button variant="outline" rightIcon={<Icon as={HiOutlineDocumentDownload} />} minW={{ md: 40 }}>
            View CV
          </Button>
        </NextChakraLink>
        <NextChakraLink
          href="/contact"
          prefetch={false}
          color={useColorModeValue("white", "black")}
          _hover={{ color: useColorModeValue("white", "black") }}
        >
          <Button
            variant="solid"
            bg={useColorModeValue("black", "white")}
            _hover={{ bg: useColorModeValue("gray.900", "gray.100") }}
            minW={{ md: 40 }}
          >
            Get in Touch
          </Button>
        </NextChakraLink>
      </HStack>
    </Center>
  );
}

export default Home;
