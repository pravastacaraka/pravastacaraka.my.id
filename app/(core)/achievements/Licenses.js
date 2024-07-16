"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import {
  Divider,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  useBoolean,
  useColorModeValue,
} from "@app-providers/chakra-ui";
import { arrayGroupBy } from "@app-utils/array";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

function Licenses({ data = [] }) {
  const [showLicenses, setShowLicenses] = useBoolean();
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data || data.length < 1) {
    return <Text>Don&apos;t have any certifications.</Text>;
  }

  const licensesGroupedByYear = arrayGroupBy("year")(data);

  return (
    <Flex direction="column">
      {
        Object.entries(licensesGroupedByYear)
          .reverse()
          .reduce(
            (acc, [year, licenses]) => {
              let showDivider = true;

              if (acc.countLicense >= 5 && !showLicenses) {
                return acc;
              }

              acc.listItems.push(
                <Stack key={year} spacing={4} mb={4}>
                  <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                    {year}
                  </Heading>
                  <List>
                    {licenses.map((license, idx) => {
                      if (acc.countLicense >= 5 && !showLicenses) {
                        showDivider = false;
                        return null;
                      }

                      acc.countLicense++;

                      let newsUrl = null;
                      try {
                        newsUrl = new URL(license.news_url);
                      } catch {}

                      return (
                        <ListItem key={`${year}-${idx}`} ml={2}>
                          <Flex align="center" mb={2}>
                            <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                            <Text fontWeight="semibold">{license.title}</Text>
                          </Flex>
                          <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6} noOfLines={2}>
                            {license.desc}
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
                  {showDivider && Object.keys(licensesGroupedByYear).length - 1 !== acc.idx && <Divider mb={4} />}
                </Stack>,
              );

              acc.idx++;
              return acc;
            },
            { countLicense: 0, listItems: [], idx: 0 },
          ).listItems
      }
      <Button
        variant="ghost"
        rightIcon={<Icon as={showLicenses ? HiOutlineChevronUp : HiOutlineChevronDown} />}
        mx="auto"
        onClick={setShowLicenses.toggle}
      >
        {showLicenses ? "Show Less" : "See More"}
      </Button>
    </Flex>
  );
}

export default Licenses;
