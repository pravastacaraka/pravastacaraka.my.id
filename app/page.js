import { NextChakraLink, NextChakraLinkButton } from "@app-components/NextChakraLink";
import { Box, Center, Heading, HStack, Stack, Text } from "@app-providers/chakra-ui";
import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import profilePic from "../public/static/images/avatar.webp";

function Home() {
  return (
    <Center
      as="section"
      flexDir="column"
      justify="space-evenly"
      minH={{ base: "calc(100vh - 60px)", md: "calc(100vh - 100px)" }}
    >
      <Box borderRadius="full" boxSize={{ base: 40, md: 48 }} mb={10} mx="auto" overflow="hidden">
        <NextChakraLink href="/about" _focus={{ boxShadow: "none" }}>
          <Image src={profilePic} alt="Picture of the Author" placeholder="blur" />
        </NextChakraLink>
      </Box>

      <Stack align="center" textAlign="center" spacing={4} mb={10}>
        <Heading as="h1" size={{ base: "xl", sm: "2xl", md: "3xl" }}>
          Hey, I&apos;m Pravasta Caraka.
        </Heading>
        <Text>
          Software Engineer at&nbsp;
          <NextChakraLink href="https://www.tokopedia.com" isExternal>
            PT Tokopedia
          </NextChakraLink>
          . Software development enthusiast.
          <br />
          You&apos;ve found my personal slice of the internet, while you&apos;re here you can&nbsp;
          <NextChakraLink href="/about">learn more about me</NextChakraLink>.
        </Text>
      </Stack>

      <HStack justify="center" spacing={3}>
        <NextChakraLinkButton
          variant="outline"
          href="http://link.pravastacaraka.my.id/resume"
          minW={{ md: 40 }}
          rightIcon={<HiOutlineDocumentDownload />}
          isExternal={true}
        >
          My Resume
        </NextChakraLinkButton>
        <NextChakraLinkButton variant="solid" href="/contact" minW={{ md: 40 }}>
          Get in Touch
        </NextChakraLinkButton>
      </HStack>
    </Center>
  );
}

export default Home;
