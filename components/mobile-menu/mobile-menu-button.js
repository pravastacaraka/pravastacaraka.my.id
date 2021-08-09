import { Icon, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

function MobileMenuButton({ label, icon, ...rest }) {
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

export default MobileMenuButton;
