import { NextChakraLinkButton } from "@app-components/NextChakraLink";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenuItem({ children, href }) {
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
      as={Link}
      href={href}
      w="full"
      color={textColor}
      aria-current={isActive ? "page" : undefined}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        textDecoration: "none",
      }}
    >
      {children}
    </NextChakraLinkButton>
  );
}

export default MobileMenuItem;
