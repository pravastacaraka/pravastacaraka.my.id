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
      icon={<Icon as={colorMode === "dark" ? HiSun : HiMoon} color={colorMode === "dark" ? "white" : "black"} />}
      variant="ghost"
      onClick={handleClick}
    />
  );
}

export { ThemeToggle };
