import { AspectRatio, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack spacing={4}>
      <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
        {Array.from({ length: 6 }).map((_, index) => (
          <AspectRatio key={index} ratio={16 / 9} overflow="hidden" rounded="md">
            <Skeleton />
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Loading;
