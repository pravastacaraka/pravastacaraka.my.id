"use client";

import { Button as ChakraButton, Icon, IconButton } from "@app-providers/chakra-ui";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";
import MobileMenuButton from "./mobile-menu/mobile-menu-button";

function ThemeToggle({ mobile }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return mobile ? (
    <MobileMenuButton
      label="Mode"
      icon={colorMode === "dark" ? HiSun : HiMoon}
      onClick={() => toggleColorMode()}
    />
  ) : (
    <IconButton
      aria-label="Toogle dark mode"
      icon={<Icon as={colorMode === "dark" ? HiSun : HiMoon} color={colorMode === "dark" ? "white" : "black"} />}
      variant="ghost"
      onClick={() => toggleColorMode()}
    />
  );
}

function Button({ children, variant, ...restProps }) {
  const blackWhite = useColorModeValue("black", "white");
  const whiteBlack = useColorModeValue("white", "black");
  const textColor = useColorModeValue("gray.900", "gray.100");
  switch (variant) {
    case "solid":
      return (
        <ChakraButton
          bg={blackWhite}
          color={whiteBlack}
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
    case "ghost":
      console.log("masuk ghost");
      return (
        <ChakraButton
          variant="ghost"
          color={textColor}
          bg="transparent"
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
    default:
      return (
        <ChakraButton
          bg={blackWhite}
          color={whiteBlack}
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
  }
}

export { ThemeToggle, Button };
