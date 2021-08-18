import {
  ButtonGroup,
  Container,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
    icon: FaFacebookF,
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

function FooterLink({ href, name, icon, isButton = false, isExternal = false, ...props }) {
  return (
    <Link href={href} {...props} isExternal>
      {isButton ? <IconButton aria-label={name} icon={<Icon as={icon} />} variant="ghost" /> : name}
    </Link>
  );
}

function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container as="footer" px={4} py={8}>
      <Stack align="center" color="gray.500" textAlign="center">
        <ButtonGroup>
          {footerSocials.map((social) => (
            <FooterLink
              key={social.name}
              {...social}
              isButton
              isExternal
              color={useColorModeValue("gray.600", "gray.400")}
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
          <FooterLink href="/disclaimer" name="Disclaimer" />
          <FooterLink href="/privacy" name="Privacy" />
        </HStack>
      </Stack>
    </Container>
  );
}

export default Footer;
