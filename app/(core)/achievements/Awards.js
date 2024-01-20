"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import { arrayGroupBy } from "@app-helper/function.helper";
import { Divider, Flex, Heading, Icon, List, ListItem, Stack, Text } from "@app-providers/chakra-ui";
import { useBoolean, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

function Awards({ data = [] }) {
  const [showAwards, setShowAwards] = useBoolean(false);
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data || !Array.isArray(data) || data.length < 1) {
    return <Text>Don&apos;t have any awards and funding.</Text>;
  }

  const awardsGroupedByYear = arrayGroupBy("year")(data);

  return (
    <Flex direction="column">
      {
        Object.entries(awardsGroupedByYear)
          .reverse()
          .reduce(
            (acc, [year, awards]) => {
              let showDivider = true;

              if (acc.countAward >= 4 && !showAwards) {
                return acc;
              }

              acc.listItems.push(
                <Stack key={year} spacing={4} mb={4}>
                  <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                    {year}
                  </Heading>
                  <List>
                    {awards.map((award, idx) => {
                      if (acc.countAward >= 4 && !showAwards) {
                        showDivider = false;
                        return null;
                      }

                      acc.countAward++;

                      let newsUrl;
                      try {
                        newsUrl = new URL(award.news_url);
                      } catch {}

                      return (
                        <ListItem key={`${year}-${idx}`} ml={2}>
                          <Flex align="center" mb={2}>
                            <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                            <Text fontWeight="semibold">{award.title}</Text>
                          </Flex>
                          <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6} noOfLines={2}>
                            {award.desc}
                          </Text>
                          {newsUrl && (
                            <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6}>
                              <NextChakraLink href={newsUrl.href} isExternal>
                                Read more
                              </NextChakraLink>
                            </Text>
                          )}
                        </ListItem>
                      );
                    })}
                  </List>
                  {showDivider && Object.keys(awardsGroupedByYear).length - 1 !== acc.idx && <Divider mb={4} />}
                </Stack>
              );

              acc.idx++;
              return acc;
            },
            { countAward: 0, listItems: [], idx: 0 }
          ).listItems
      }
      <Button
        variant="ghost"
        rightIcon={<Icon as={showAwards ? HiOutlineChevronUp : HiOutlineChevronDown} />}
        mx="auto"
        onClick={setShowAwards.toggle}
      >
        {showAwards ? "Show Less" : "See More"}
      </Button>
    </Flex>
  );
}

export default Awards;
