import {
  AspectRatio,
  Box,
  Center,
  chakra,
  Heading,
  HStack,
  Link as ChakraLink,
  Tag,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { hexToRGB } from "helper/function.helper";
import Image from "next/image";
import NextChakraLink from "./NextChakraLink";

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
        p={{ base: 0, md: 2 }}
        d={{ base: "block", md: "flex" }}
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        rounded={{ base: "lg" }}
        _hover={{ shadow: "base" }}
      >
        <AspectRatio
          w={{ base: "full", md: "320px" }}
          ratio={16 / 9}
          roundedTop={{ base: "md" }}
          roundedBottom={{ md: "md" }}
          overflow="hidden"
        >
          <Image src={img} layout="fill" objectFit="cover" alt={name} />
        </AspectRatio>
        <HStack w="full" p={4}>
          <VStack w="full" align="start" justify="flex-start" spacing={4}>
            <Wrap>
              <WrapItem>
                <Heading as="h3" fontWeight="bold" fontSize="md" noOfLines={1}>
                  {name}
                </Heading>
              </WrapItem>
              <WrapItem>
                <Tag size="sm" colorScheme={getTypeColor(type)} whiteSpace="nowrap">
                  {type}
                </Tag>
              </WrapItem>
            </Wrap>
            <Text
              fontSize="sm"
              fontWeight="normal"
              lineHeight="1.75"
              color={useColorModeValue("gray.600", "gray.400")}
              noOfLines={2}
            >
              {desc}
            </Text>
            <Wrap w="full">
              {stack.map((item, id) => (
                <WrapItem key={id}>
                  <Tag size="sm" rounded="full" whiteSpace="nowrap" overflow="hidden">
                    {item}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </HStack>
      </Box>
    </ChakraLink>
  );
}

function SkillCard({ name, icon, to, color }) {
  const { colorMode } = useColorMode();
  const iconColor = (color) => {
    if (color === "#000000" && colorMode === "dark") return "#EDF2F7";
    else return color;
  };
  return (
    <NextChakraLink href={to} prefetch={false} isExternal={to != "/"}>
      <HStack
        p={2}
        spacing={1}
        align="center"
        borderWidth="1px"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        rounded={{ base: "lg" }}
        _hover={{ shadow: "base" }}
      >
        <Center boxSize={6} rounded="md" bgColor={hexToRGB(iconColor(color), useColorModeValue(0.1, 0.3))}>
          <chakra.svg
            boxSize={4}
            fill={iconColor(color)}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{name}</title>
            <path d={icon} />
          </chakra.svg>
        </Center>
        <Text
          color={useColorModeValue("gray.600", "gray.400")}
          lineHeight="normal"
          fontSize="sm"
          fontWeight="normal"
          noOfLines={1}
        >
          {name}
        </Text>
      </HStack>
    </NextChakraLink>
  );
}

export { ProjectCard, SkillCard };
