"use client";

import { Icon, Text, useColorModeValue, VStack } from "@app-providers/chakra-ui";

function MobileMenuButton({ label, icon, ...rest }) {
  const textColor = useColorModeValue("gray.700", "gray.200");
  const btnTextColor = useColorModeValue("blue.600", "yellow.200");
  return (
    <VStack as="button" spacing={0} color={textColor} role="group" aria-label={label} {...rest}>
      <Icon as={icon} boxSize={6} _groupHover={{ color: btnTextColor }} />
      <Text fontSize="xs" fontWeight="500" _groupHover={{ color: btnTextColor }}>
        {label}
      </Text>
    </VStack>
  );
}

export default MobileMenuButton;
