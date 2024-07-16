"use client";

import {
  Button as ChakraButton,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@app-providers/chakra-ui";
import { HiMoon, HiSun } from "react-icons/hi";
import MobileMenuButton from "./mobile-menu/mobile-menu-button";

function ThemeToggle({ isMobile }) {
  const { toggleColorMode } = useColorMode();
  const blackWhite = useColorModeValue("black", "white");
  const btnIcon = useColorModeValue(HiMoon, HiSun);
  const btnBgColorHover = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return !isMobile ? (
    <IconButton
      variant="ghost"
      aria-label="Toogle dark mode"
      icon={<Icon as={btnIcon} color={blackWhite} />}
      _hover={{
        bg: btnBgColorHover,
      }}
      onClick={toggleColorMode}
    />
  ) : (
    <MobileMenuButton label="Mode" icon={btnIcon} onClick={toggleColorMode} />
  );
}

function Button({ children, variant, ...restProps }) {
  const blackWhite = useColorModeValue("black", "white");
  const whiteBlack = useColorModeValue("white", "black");
  switch (variant) {
    case "solid":
      return (
        <ChakraButton
          bg={blackWhite}
          color={whiteBlack}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275), 
            border - color .2s cubic - bezier(.39, .575, .565, 1),
            background - color .2s cubic - bezier(.39, .575, .565, 1)
          `}
          _hover={{
            bg: whiteBlack,
            color: blackWhite,
            borderWidth: "1px",
            borderColor: blackWhite,
            transform: "scale(1.05)",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
    case "outline":
      return (
        <ChakraButton
          variant={variant}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275), 
            border - color .2s cubic - bezier(.39, .575, .565, 1),
            background - color .2s cubic - bezier(.39, .575, .565, 1)
          `}
          _hover={{
            borderWidth: "1px",
            borderColor: blackWhite,
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
    case "ghost":
      return (
        <ChakraButton
          variant={variant}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275)
          `}
          _hover={{
            transform: "scale(1.05)",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
  }
}

export { Button, ThemeToggle };
