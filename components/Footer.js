import { Container, Divider, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

function FooterLink({ href, name, ...props }) {
  return (
    <Link href={href} passHref>
      <Text as="a" color="gray.500" _hover={{ color: "gray.600" }} {...props}>
        {name}
      </Text>
    </Link>
  );
}

function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container as="footer" d={{ base: "none", md: "block" }}>
      <Divider />
      <HStack justify="space-between" w="full" py={4}>
        <Text fontSize="sm" color="gray.500">
          © {date} Pravasta Caraka Bramastagiri
        </Text>
        <HStack spacing={4}>
          <FooterLink href="/disclaimer" name="Disclaimer" />
          <FooterLink href="/privacy" name="Privacy" />
        </HStack>
      </HStack>
    </Container>
  );
}

export default Footer;
