import { ThemeToggle } from "@app-components/Button";
import { _app_routes } from "@app-config/app.config";
import { Container, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { NextChakraLinkButton } from "./NextChakraLink";

function HeaderLink({ children, href }) {
  const pathname = usePathname();
  let isActive = false;

  if (href !== "/") {
    const [, group] = href.split("/");
    isActive = pathname.includes(group);
  } else {
    if (href === pathname) isActive = true;
  }

  const { colorMode } = useColorMode();
  const textColor = isActive ? (colorMode === "dark" ? "yellow.200" : "blue.600") : undefined;

  return (
    <NextChakraLinkButton
      href={href}
      color={textColor}
      fontWeight={isActive ? "bold" : "normal"}
      variant="ghost"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        transform: "scale(1.05)",
        textDecoration: "none",
      }}
    >
      {children}
    </NextChakraLinkButton>
  );
}

function Header() {
  return (
    <Container
      as="nav"
      bg={useColorModeValue("rgba(255,255,255,0.6)", "rgba(0,0,0,0.6)")}
      backdropFilter="blur(12px)"
      display={{ base: "none", md: "block" }}
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
            <HeaderLink key={title} href={href}>
              {title}
            </HeaderLink>
          ))}
        </HStack>
        <ThemeToggle />
      </HStack>
    </Container>
  );
}

export default Header;
