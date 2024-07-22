import { AspectRatio, SimpleGrid, Skeleton, Stack } from "ui/common/providers/theme.provider";

export const ProjectLoading = () => {
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
