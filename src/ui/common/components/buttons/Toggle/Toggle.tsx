"use client";

import { HiMoon, HiSun } from "react-icons/hi";
import { Icon, IconButton, useColorMode, useColorModeValue } from "ui/common/providers/theme.provider";
import MobileMenuButton from "../../layout/MobileMenu/MobileMenuButton";

type Props = {
  isMobile?: boolean;
};

export const ThemeToggle = ({ isMobile }: Props) => {
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
};
