"use client";

import { ThemeToggle } from "@app-components/Button";
import { _app_routes } from "@app-config/app.config";
import { Box, Container, HStack, useColorModeValue } from "@app-providers/chakra-ui";
import { usePathname } from "next/navigation";
import { NextChakraLinkButton } from "./NextChakraLink";

function HeaderLink({ children, href }) {
  let isActive = false;
  const pathname = usePathname();
  const linkColor = useColorModeValue("blue.600", "yellow.200");

  if (href !== "/") {
    const [, group] = href.split("/");
    isActive = pathname.includes(group);
  } else if (href === pathname) {
    isActive = true;
  }

  return (
    <NextChakraLinkButton
      href={href}
      variant="ghost"
      color={isActive && linkColor}
      fontWeight={isActive ? "bold" : "normal"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </NextChakraLinkButton>
  );
}

function Header() {
  const contBgColor = useColorModeValue("whiteAlpha.700", "blackAlpha.700");
  return (
    <Container
      as="nav"
      bg={contBgColor}
      backdropFilter="blur(12px)"
      display={{ base: "none", md: "block" }}
      position="sticky"
      px={4}
      py={8}
      top={0}
      zIndex={10}
    >
      <HStack justify="space-between" w="full">
        <Box />
        <HStack>
          {_app_routes.map(({ title, href }) => (
            <HeaderLink key={title} href={href}>
              {title}
            </HeaderLink>
          ))}
        </HStack>
        <ThemeToggle isMobile={false} />
      </HStack>
    </Container>
  );
}

export default Header;
