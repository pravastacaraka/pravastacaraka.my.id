"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import { arrayGroupBy } from "@app-helper/function.helper";
import { Divider, Flex, Heading, Icon, List, ListItem, Stack, Text } from "@app-providers/chakra-ui";
import { useBoolean, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineNewspaper } from "react-icons/hi";

function Licenses({ data }) {
  let countLicense = 0;
  const [showLicenses, setShowLicenses] = useBoolean();
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data || data?.length < 1) return <Text>Don&apos;t have any certifications.</Text>;

  const licensesGroupByYear = arrayGroupBy("year");
  const licensesGroupedByYear = licensesGroupByYear(data);

  return (
    <Flex direction="column">
      {Object.keys(licensesGroupedByYear)
        .reverse()
        .map((year, yearIdx) => {
          let showDivider = true;

          if (countLicense >= 5 && !showLicenses) {
            return;
          }

          return (
            <Stack key={year} spacing={4} mb={4}>
              <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                {year}
              </Heading>
              <List>
                {licensesGroupedByYear[year].map((license) => {
                  if (countLicense >= 5 && !showLicenses) {
                    showDivider = false;
                    return;
                  }

                  countLicense++;

                  return (
                    <ListItem key={license.id} ml={2}>
                      <Flex align="center" mb={2}>
                        <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                        <Text fontWeight="semibold">{license.title}</Text>
                      </Flex>
                      <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6} noOfLines={2}>
                        {license.desc}
                      </Text>
                      {license.news_url && (
                        <Flex align="center" fontSize={{ base: "xs", md: "sm" }} ml={6} noOfLines={1}>
                          <Icon as={HiOutlineNewspaper} mr={2} />
                          <NextChakraLink href={license.news_url} isExternal>
                            {license.news_url}
                          </NextChakraLink>
                        </Flex>
                      )}
                    </ListItem>
                  );
                })}
              </List>
              {showDivider && Object.keys(licensesGroupedByYear).length - 1 !== yearIdx && <Divider mb={4} />}
            </Stack>
          );
        })}
      {showLicenses ? (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronUp} />}
          mx="auto"
          onClick={setShowLicenses.toggle}
        >
          Show Less
        </Button>
      ) : (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronDown} />}
          mx="auto"
          onClick={setShowLicenses.toggle}
        >
          See More
        </Button>
      )}
    </Flex>
  );
}

export default Licenses;
