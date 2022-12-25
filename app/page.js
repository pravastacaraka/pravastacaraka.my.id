"use client";

import { NextChakraLink, NextChakraLinkButton } from "@app-components/NextChakraLink";
import { Box, Center, Heading, HStack, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
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
        <Heading as="h1" size="3xl">
          Hey, I&apos;m Pravasta Caraka.
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} fontSize={["lg", "xl"]} lineHeight="tall">
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
          as={Link}
          href="http://link.pravastacaraka.my.id/resume"
          target="_blank"
          rel="noopener noreferrer"
          minW={{ md: 40 }}
          rightIcon={<Icon as={HiOutlineDocumentDownload} />}
          variant="outline"
          _hover={{
            borderColor: useColorModeValue("black", "white"),
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
        >
          My Resume
        </NextChakraLinkButton>
        <NextChakraLinkButton
          as={Link}
          href="/contact"
          bg={useColorModeValue("black", "white")}
          color={useColorModeValue("white", "black")}
          minW={{ md: 40 }}
          variant="solid"
          _hover={{
            borderWidth: "1px",
            borderColor: useColorModeValue("black", "white"),
            color: useColorModeValue("black", "white"),
            bg: useColorModeValue("white", "black"),
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
        >
          Get in Touch
        </NextChakraLinkButton>
      </HStack>
    </Center>
  );
}

export default Home;
