import { Icon, IconButton, useColorMode } from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";
import MobileMenuButton from "./mobile-menu/mobile-menu-button";

function ThemeToggle({ mobile }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
  };

  return mobile ? (
    <MobileMenuButton label="Mode" icon={colorMode === "dark" ? HiSun : HiMoon} onClick={handleClick} />
  ) : (
    <IconButton
      aria-label="Toogle dark mode"
      icon={
        <Icon
          as={colorMode === "dark" ? HiSun : HiMoon}
          boxSize={4}
          color={colorMode === "dark" ? "gray.200" : "gray.800"}
        />
      }
      bg={colorMode === "dark" ? "gray.800" : "gray.200"}
      _hover={{ bg: colorMode === "dark" ? "gray.800" : "gray.200" }}
      onClick={handleClick}
    />
  );
}

export { ThemeToggle };