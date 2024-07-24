import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "ui/common/components/links/Link/Link";
import { LinkIconButton } from "ui/common/components/links/LinkIconButton/LinkIconButton";
import { ButtonGroup, Container, HStack, Stack, Text } from "ui/common/providers/theme.provider";

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

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container as="footer" mb={{ base: "60px", md: 0 }} px={4} py={8}>
      <Stack align="center" textAlign="center">
        <ButtonGroup>
          {footerSocials.map((social) => (
            <LinkIconButton
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
            <Link href="https://nextjs.org" isExternal={true}>
              Next.js
            </Link>
            ,&nbsp;
            <Link href="https://chakra-ui.com" isExternal={true}>
              Chakra UI
            </Link>
            , and&nbsp;
            <Link href="https://airtable.com" isExternal={true}>
              Airtable
            </Link>
            . Hosted in&nbsp;
            <Link href="https://vercel.com" isExternal={true}>
              Vercel
            </Link>
          </Text>
          <Text>MIT License © {date} Pravasta Caraka Bramastagiri</Text>
        </Stack>
        <HStack spacing={4}>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy</Link>
        </HStack>
      </Stack>
    </Container>
  );
}
