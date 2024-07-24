import type { StackProps } from "ui/common/providers/theme.provider";
import { Icon, Text, useColorModeValue, VStack } from "ui/common/providers/theme.provider";

type Props = StackProps & {
  label: string;
  icon: React.ElementType;
};

export default function MobileMenuButton({ label, icon, ...rest }: Props) {
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
