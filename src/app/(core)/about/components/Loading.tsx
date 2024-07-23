import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  Wrap,
  WrapItem,
} from "ui/common/providers/theme.provider";

export const AboutLoading = () => {
  return (
    <>
      <Center mb={6}>
        <AspectRatio ratio={16 / 9} width="85%">
          <Skeleton />
        </AspectRatio>
      </Center>

      <SkeletonText noOfLines={1} skeletonHeight="22px" />
      <SkeletonText noOfLines={3} skeletonHeight="22px" />
      <SkeletonText noOfLines={3} skeletonHeight="22px" />
      <SkeletonText noOfLines={3} skeletonHeight="22px" />
      <SkeletonText noOfLines={2} skeletonHeight="22px" />
    </>
  );
};

export const KnowledgeLoading = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} rowGap={8} columnGap={2} mt={8}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box key={index}>
          <Heading mb={4} size="md" letterSpacing="tighter" fontWeight="600">
            <Skeleton height="24px" fitContent>
              Mock Judul
            </Skeleton>
          </Heading>
          <Box>
            <Wrap>
              {Array.from({ length: 10 }).map((_, index) => (
                <WrapItem key={index}>
                  <Skeleton height="22px">
                    <HStack w={{ base: "110px", md: "135px" }}>
                      <Icon boxSize={4} fill="currentcolor" role="img" viewBox="0 0 24 24">
                        <title>mock title</title>
                        <path d="M24 0v24H0V0h24ZM10.933 15.89H6.84v5.52h4.198v-.93H7.955v-1.503h2.77v-.93h-2.77v-1.224h2.978v-.934Zm2.146 0h-1.084v5.52h1.035v-3.6l2.226 3.6h1.118v-5.52h-1.036v3.686l-2.259-3.687Zm5.117 0h-1.208l1.973 5.52h1.19l1.976-5.52h-1.182l-1.352 4.085-1.397-4.086ZM5.4 19.68H3.72v1.68H5.4v-1.68Z" />
                      </Icon>
                      <Text>mock name</Text>
                    </HStack>
                  </Skeleton>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};
