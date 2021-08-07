import { Icon, Text, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react";
import { HiMoon, HiSun } from "react-icons/hi";

function ThemeToggle({ mobile }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick = () => {
    toggleColorMode();
  };

  return mobile ? (
    <NavButton label="Mode" icon={colorMode === "dark" ? HiSun : HiMoon} onClick={handleClick} />
  ) : null;
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
