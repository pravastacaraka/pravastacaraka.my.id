"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import { arrayGroupBy } from "@app-helper/function.helper";
import { Divider, Flex, Heading, Icon, List, ListItem, Stack, Text } from "@app-providers/chakra-ui";
import { useBoolean, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineNewspaper } from "react-icons/hi";

function Awards({ data }) {
  let countAward = 0;
  const [showAwards, setShowAwards] = useBoolean();
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data || data?.length < 1) return <Text>Don&apos;t have any awards and funding.</Text>;

  const awardsGroupByYear = arrayGroupBy("year");
  const awardsGroupedByYear = awardsGroupByYear(data);

  return (
    <Flex direction="column">
      {Object.keys(awardsGroupedByYear)
        .reverse()
        .map((year, yearIdx) => {
          let showDivider = true;

          if (countAward >= 4 && !showAwards) {
            return;
          }

          return (
            <Stack key={year} spacing={4} mb={4}>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                {year}
              </Heading>
              <List>
                {awardsGroupedByYear[year].map((award) => {
                  if (countAward >= 4 && !showAwards) {
                    showDivider = false;
                    return;
                  }

                  countAward++;

                  return (
                    <ListItem key={award.id} ml={2}>
                      <Flex align="center" mb={2}>
                        <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                        <Text fontWeight="semibold">{award.title}</Text>
                      </Flex>
                      <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6} noOfLines={2}>
                        {award.desc}
                      </Text>
                      {award.news_url && (
                        <Flex align="center" fontSize={{ base: "xs", md: "sm" }} ml={6} noOfLines={1}>
                          <Icon as={HiOutlineNewspaper} mr={2} />
                          <NextChakraLink href={award.news_url} isExternal>
                            {award.news_url}
                          </NextChakraLink>
                        </Flex>
                      )}
                    </ListItem>
                  );
                })}
              </List>
              {showDivider && Object.keys(awardsGroupedByYear).length - 1 !== yearIdx && <Divider mb={4} />}
            </Stack>
          );
        })}
      {showAwards ? (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronUp} />}
          mx="auto"
          onClick={setShowAwards.toggle}
        >
          Show Less
        </Button>
      ) : (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronDown} />}
          mx="auto"
          onClick={setShowAwards.toggle}
        >
          See More
        </Button>
      )}
    </Flex>
  );
}

export default Awards;
