"use client";

import { _app_routes } from "config/app.config";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "ui/common/components/buttons/Toggle/Toggle";
import { LinkButton } from "ui/common/components/links/LinkButton/LinkButton";
import { Box, Container, HStack, useColorModeValue } from "ui/common/providers/theme.provider";

function HeaderLink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
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
    <LinkButton
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
    </LinkButton>
  );
}

export default function Header() {
  return (
    <Container
      as="nav"
      bg={useColorModeValue("whiteAlpha.700", "blackAlpha.700")}
      backdropFilter="blur(12px)"
      display={{ base: "none", md: "block" }}
      position="sticky"
      px={4}
      py={8}
      top={0}
      zIndex={10}
    >
      <HStack justifyContent="space-between" width="full">
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
