import { ThemeToggle } from "@app-components/Button";
import { _app_routes } from "@app-config/app.config";
import { Button, Container, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useCallback } from "react";

function HeaderLink({ name, href, isActive }) {
  return (
    <Link href={href} passHref>
      <Button
        as="a"
        color={isActive ? useColorModeValue("#3b82f6", "yellow.200") : undefined}
        fontWeight={isActive ? "bold" : "normal"}
        variant="ghost"
        _hover={{
          color: isActive ? useColorModeValue("#3b82f6", "yellow.200") : useColorModeValue("black", "white"),
          bgColor: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        {name}
      </Button>
    </Link>
  );
}

function Header() {
  const router = useRouter();
  const isRoute = useCallback((route) => router.route == route, [router.route]);
  return (
    <Container
      as="nav"
      background={useColorModeValue("rgba(255,255,255,0.6)", "rgba(0,0,0,0.6)")}
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
