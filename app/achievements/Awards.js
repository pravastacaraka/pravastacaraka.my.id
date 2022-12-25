"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import { useGetAwards } from "@app-helper/api.helper";
import { arrayGroupBy } from "@app-helper/function.helper";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  SkeletonText,
  Stack,
  Text,
} from "@app-providers/chakra-ui";
import { useBoolean, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineNewspaper } from "react-icons/hi";

function loadingSkeleton() {
  return (
    <Stack spacing={4}>
      <SkeletonText noOfLines={1} skeletonHeight="21px" width="40px" />
      <SkeletonText noOfLines={3} skeletonHeight="21px" />
      <SkeletonText noOfLines={3} skeletonHeight="21px" />
      <SkeletonText noOfLines={3} skeletonHeight="21px" />
    </Stack>
  );
}

function Awards() {
  const [showAwards, setShowAwards] = useBoolean();
  const { liColor } = useColorModeValue("gray.600", "gray.400");
  const { iconColor } = useColorModeValue("green.600", "yellow.200");
  const { textColor } = useColorModeValue("green.900", "gray.100");

  const { awards, awardsError, awardsLoading } = useGetAwards();

  if (awardsError) return <div>Oh no! Something went wrong, please try again!</div>;
  if (awardsLoading) return loadingSkeleton();

  const awardsGroupByYear = arrayGroupBy("year");
  const awardsGroupedByYear = awardsGroupByYear(awards.data);

  return awardsGroupedByYear ? (
    <>
      <Stack
        spacing={4}
        {...(showAwards
          ? undefined
          : { maxH: { base: "445px", md: "450px", lg: "565px", xl: "570px" }, overflow: "hidden" })}
      >
        {Object.keys(awardsGroupedByYear)
          .reverse()
          .map((year, yearIdx) => {
            return (
              <Box key={year}>
                <Heading
                  as="h3"
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="semibold"
                  letterSpacing="tight"
                  mb={4}
                >
                  {year}
                </Heading>
                <List>
                  {awardsGroupedByYear[year].map((award) => (
                    <ListItem key={award.id} color={liColor} mb={4} ml={2}>
                      <Flex align="center" mb={2}>
                        <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                        <Text fontWeight="medium" color={textColor}>
                          {award.title}
                        </Text>
                      </Flex>
                      <Text fontSize="sm" mb={2} ml={6} noOfLines={2}>
                        {award.desc}
                      </Text>
                      {award.news_url && (
                        <Flex align="center" fontSize="sm" ml={6} noOfLines={1}>
                          <Icon as={HiOutlineNewspaper} mr={2} />
                          <NextChakraLink href={award.news_url} isExternal>
                            {award.news_url}
                          </NextChakraLink>
                        </Flex>
                      )}
                    </ListItem>
                  ))}
                </List>
                {Object.keys(awardsGroupedByYear).length - 1 !== yearIdx && <Divider mb={2} />}
              </Box>
            );
          })}
      </Stack>
      {showAwards ? (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronUp} />}
          fontWeight="medium"
          mt={4}
          mx="auto"
          onClick={setShowAwards.toggle}
        >
          Show Less
        </Button>
      ) : (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronDown} />}
          fontWeight="medium"
          mt={4}
          mx="auto"
          onClick={setShowAwards.toggle}
        >
          See More
        </Button>
      )}
    </>
  ) : (
    <Text>Don&apos;t have any awards and funding.</Text>
  );
}

export default Awards;
