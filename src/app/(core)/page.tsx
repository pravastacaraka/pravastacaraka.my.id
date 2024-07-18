import Image from "next/image";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { LinkButton } from "ui/common/components/links/LinkButton/LinkButton";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import { Box, Center, HStack, Heading, Stack } from "ui/common/providers/theme.provider";
import profilePic from "../../../public/assets/images/avatar.webp";

export default function Page() {
  return (
    <Center
      as="section"
      flexDir="column"
      justifyContent="center"
      minHeight={{ base: "calc(100vh - 60px)", md: "calc(100vh - 100px)" }}
    >
      <Box borderRadius="full" boxSize={{ base: 40, md: 48 }} mb={10} mx="auto" overflow="hidden">
        <Image src={profilePic} alt="Picture of the Author" placeholder="blur" />
      </Box>

      <Stack align="center" textAlign="center" spacing={4} mb={10}>
        <Heading as="h1" size={{ base: "xl", sm: "2xl", md: "3xl" }}>
          Hey, I&apos;m Pravasta Caraka.
        </Heading>
        <CustomReactMarkdown>
          A software engineer with expertise in building efficient and scalable solutions with cutting-edge
          technologies 🚀. While you&apos;re here, you can [learn more about me](/about).
        </CustomReactMarkdown>
      </Stack>

      <HStack justify="center" spacing={3}>
        <LinkButton
          href="/resume"
          variant="outline"
          minW={{ md: 40 }}
          rightIcon={<HiOutlineDocumentDownload />}
          isExternal={true}
        >
          My Resume
        </LinkButton>
        <LinkButton href="/contact" variant="solid" minW={{ md: 40 }}>
          Get in Touch
        </LinkButton>
      </HStack>
    </Center>
  );
}
