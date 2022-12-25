import { ButtonGroup, Container, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NextChakraLink, NextChakraLinkIconButton } from "./NextChakraLink";

const footerSocials = [
  {
    name: "Email",
    href: "mailto:hello@pravastacaraka.my.id",
    icon: FaEnvelope,
  },
  {
    name: "Github",
    href: "https://github.com/pravastacaraka",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/pravastacaraka",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/pravastacaraka",
    icon: FaFacebook,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/pravastacaraka",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/pravastacaraka",
    icon: FaInstagram,
  },
];

function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container as="footer" mb={{ base: "60px", md: 0 }} px={4} py={8}>
      <Stack align="center" color="gray.500" textAlign="center">
        <ButtonGroup>
          {footerSocials.map((social) => (
            <NextChakraLinkIconButton
              key={social.name}
              href={social.href}
              aria-label={social.name}
              color="gray.500"
              icon={<Icon as={social.icon} />}
              _hover={{
                transform: "scale(1.05)",
              }}
              isExternal
            />
          ))}
        </ButtonGroup>
        <Stack spacing={0}>
          <Text>
            Made using&nbsp;
            <NextChakraLink href="https://nextjs.org" isExternal>
              Next.js
            </NextChakraLink>
            ,&nbsp;
            <NextChakraLink href="https://chakra-ui.com" isExternal>
              Chakra UI
            </NextChakraLink>
            , and&nbsp;
            <NextChakraLink href="https://airtable.com" isExternal>
              Airtable
            </NextChakraLink>
            . Hosted in&nbsp;
            <NextChakraLink href="https://vercel.com" isExternal>
              Vercel
            </NextChakraLink>
          </Text>
          <Text>MIT License © {date} Pravasta Caraka Bramastagiri</Text>
        </Stack>
        <HStack spacing={4}>
          <NextChakraLink href="/disclaimer">Disclaimer</NextChakraLink>
          <NextChakraLink href="/privacy">Privacy</NextChakraLink>
        </HStack>
      </Stack>
    </Container>
  );
}

export default Footer;
