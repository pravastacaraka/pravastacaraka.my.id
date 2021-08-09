import { Icon, IconButton, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeToggle({ mobile }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
  };

  return mobile ? (
    <NavButton label="Mode" icon={colorMode === "dark" ? HiSun : HiMoon} onClick={handleClick} />
  ) : (
    <IconButton
      aria-label="Toogle dark mode"
      icon={
        <Icon
          as={colorMode === "dark" ? HiSun : HiMoon}
          boxSize={4}
          color={useColorModeValue("gray.800", "gray.200")}
        />
      }
      bg={useColorModeValue("gray.200", "gray.800")}
      _hover={{ bg: useColorModeValue("gray.200", "gray.800") }}
      onClick={handleClick}
    />
  );
}

function NavButton({ label, icon, ...rest }) {
  return (
    <VStack
      as="button"
      spacing={0}
      color={useColorModeValue("gray.600", "gray.200")}
      transition="all 0.1s ease-out"
      _hover={{ color: useColorModeValue("blue.600", "blue.200") }}
      {...rest}
    >
      <Icon as={icon} boxSize={6} />
      <Text fontSize="xs" fontWeight="500" color={useColorModeValue("gray.600", "gray.200")}>
        {label}
      </Text>
    </VStack>
  );
}

export { NavButton, ThemeToggle };
