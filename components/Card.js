import {
  AspectRatio,
  Box,
  chakra,
  Heading,
  HStack,
  Link as ChakraLink,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/legacy/image";

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
        display={{ base: "block", md: "flex" }}
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

function KnowledgeCard({ data, label }) {
  return (
    <Box>
      <Heading mb={4} size="md" letterSpacing="tighter" fontWeight="600">
        {label}
      </Heading>
      <Wrap color={useColorModeValue("gray.600", "gray.400")} fontSize="sm" spacing={1}>
        {data?.map((item) => (
          <WrapItem key={item.id}>
            <HStack w={{ base: "110px", md: "120px" }}>
              <chakra.svg
                boxSize={4}
                fill="currentcolor"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{`${item.fields.name}`}</title>
                <path d={item.fields.icon} />
              </chakra.svg>
              <Text noOfLines={1}>{item.fields.name}</Text>
            </HStack>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export { KnowledgeCard, ProjectCard };
