"use client";

import { NextChakraLinkButton } from "@app-components/NextChakraLink";
import { useColorModeValue } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

function MobileMenuItem({ children, href }) {
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
      width="full"
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

export default MobileMenuItem;
