import { ButtonGroup, Container, HStack, Stack, Text } from "@app-providers/chakra-ui";
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
      <Stack align="center" textAlign="center">
        <ButtonGroup>
          {footerSocials.map((social) => (
            <NextChakraLinkIconButton
              key={social.name}
              href={social.href}
              aria-label={social.name}
              icon={<social.icon />}
              isExternal={true}
            />
          ))}
        </ButtonGroup>
        <Stack spacing={0}>
          <Text>
            Made using&nbsp;
            <NextChakraLink href="https://nextjs.org" isExternal={true}>
              Next.js
            </NextChakraLink>
            ,&nbsp;
            <NextChakraLink href="https://chakra-ui.com" isExternal={true}>
              Chakra UI
            </NextChakraLink>
            , and&nbsp;
            <NextChakraLink href="https://airtable.com" isExternal={true}>
              Airtable
            </NextChakraLink>
            . Hosted in&nbsp;
            <NextChakraLink href="https://vercel.com" isExternal={true}>
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
