import { ButtonGroup, Container, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NextChakraLink, NextChakraLinkIconButton } from "./NextChakraLink";

const footerSocials = [
  {
    name: "Email",
    href: "mailto:raka@pravastacaraka.my.id",
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
    <Container as="footer" px={4} py={8}>
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
            <Link href="https://nextjs.org" isExternal>
              Next.js
            </Link>
            ,&nbsp;
            <Link href="https://chakra-ui.com" isExternal>
              Chakra UI
            </Link>
            , and&nbsp;
            <Link href="https://airtable.com" isExternal>
              Airtable
            </Link>
            . Hosted in&nbsp;
            <Link href="https://vercel.com" isExternal>
              Vercel
            </Link>
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
