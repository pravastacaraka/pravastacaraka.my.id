import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Link as ChakraLink,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

function ProjectCard({ name, desc, type, img, stack, demo_url }) {
  const getTypeColor = (type) => {
    if (type === "Web App") {
      return "teal";
    } else if (type === "Mobile App") {
      return "blue";
    } else if (type === "Platform") {
      return "orange";
    }
  };
  return (
    <ChakraLink w="full" href={demo_url} _hover={{ color: "inherit" }} _focus={{ border: "none" }} isExternal>
      <Box
        p={2}
        d={{ base: "block", md: "flex" }}
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        rounded={{ base: "lg" }}
        _hover={{ shadow: "base" }}
      >
        <AspectRatio
          w={{ base: "full", md: "320px" }}
          ratio={16 / 9}
          roundedTop={{ base: "lg" }}
          overflow="hidden"
        >
          <Image src={img} layout="fill" objectFit="cover" alt={name} />
        </AspectRatio>
        <HStack w="full" ml={4}>
          <VStack align="start" justify="flex-start" spacing={2}>
            <HStack>
              <Heading as="h3" fontWeight="bold" fontSize="md" noOfLines={2}>
                {name}
              </Heading>
              <Tag size="sm" colorScheme={getTypeColor(type)}>
                {type}
              </Tag>
            </HStack>
            <Text
              fontSize="sm"
              fontWeight="normal"
              lineHeight="1.75"
              color={useColorModeValue("gray.600", "gray.400")}
              noOfLines={2}
            >
              {desc}
            </Text>
            <HStack w="full">
              <HStack mt={2}>
                {stack.map((item) => (
                  <Tag size="sm" rounded="full" whiteSpace="nowrap">
                    {item}
                  </Tag>
                ))}
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </ChakraLink>
  );
}

export { ProjectCard };
