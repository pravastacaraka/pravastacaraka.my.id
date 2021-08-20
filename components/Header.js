import { ThemeToggle } from "@app-components/Button";
import { _app_routes } from "@app-config/app.config";
import { Container, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { NextChakraLinkButton } from "./NextChakraLink";

function HeaderLink({ name, href, isActive }) {
  const { colorMode } = useColorMode();
  const textColor = isActive ? (colorMode === "dark" ? "yellow.200" : "#2756a3") : undefined;
  return (
    <NextChakraLinkButton
      href={href}
      color={textColor}
      fontWeight={isActive ? "bold" : "normal"}
      variant="ghost"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        color: textColor,
        transform: "scale(1.05)",
      }}
    >
      {name}
    </NextChakraLinkButton>
  );
}

function Header() {
  const router = useRouter();
  const isRoute = useCallback((asPath) => router.asPath == asPath, [router.asPath]);
  return (
    <Container
      as="nav"
      bg={useColorModeValue("rgba(255,255,255,0.6)", "rgba(0,0,0,0.6)")}
      backdropFilter="blur(12px)"
      d={{ base: "none", md: "block" }}
      position="sticky"
      px={4}
      py={8}
      top={0}
      zIndex={10}
    >
      <HStack justify="space-between" w="full">
        <HStack></HStack>
        <HStack>
          {_app_routes.map(({ title, href }) => (
            <HeaderLink key={title} href={href} name={title} isActive={isRoute(href)} />
          ))}
        </HStack>
        <ThemeToggle />
      </HStack>
    </Container>
  );
}

export default Header;
