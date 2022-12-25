"use client";

import { Button } from "@app-components/Button";
import { NextChakraLink } from "@app-components/NextChakraLink";
import { useGetLicenses } from "@app-helper/api.helper";
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

function Licenses() {
  const [showLicenses, setShowLicenses] = useBoolean();
  const { liColor } = useColorModeValue("gray.600", "gray.400");
  const { iconColor } = useColorModeValue("green.600", "yellow.200");
  const { textColor } = useColorModeValue("green.900", "gray.100");

  const { licenses, licensesError, licensesLoading } = useGetLicenses();

  if (licensesError) return <div>Oh no! Something went wrong, please try again!</div>;
  if (licensesLoading) return loadingSkeleton();

  const licensesGroupByYear = arrayGroupBy("year");
  const licensesGroupedByYear = licensesGroupByYear(licenses.data);

  return licensesGroupedByYear ? (
    <>
      <Stack spacing={4} {...(showLicenses ? undefined : { maxH: "550px", overflow: "hidden" })}>
        {Object.keys(licensesGroupedByYear)
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
                  {licensesGroupedByYear[year].map((license) => (
                    <ListItem key={license.id} color={liColor} mb={4} ml={2}>
                      <Flex align="center" mb={2}>
                        <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                        <Text fontWeight="medium" color={textColor}>
                          {license.title}
                        </Text>
                      </Flex>
                      <Text fontSize="sm" mb={2} ml={6} noOfLines={2}>
                        {license.desc}
                      </Text>
                      {license.news_url && (
                        <Flex align="center" fontSize="sm" ml={6} noOfLines={1}>
                          <Icon as={HiOutlineNewspaper} mr={2} />
                          <NextChakraLink href={license.news_url} isExternal>
                            {license.news_url}
                          </NextChakraLink>
                        </Flex>
                      )}
                    </ListItem>
                  ))}
                </List>
                {Object.keys(licensesGroupedByYear).length - 1 !== yearIdx && <Divider mb={2} />}
              </Box>
            );
          })}
      </Stack>
      {showLicenses ? (
        <Button
          variant="ghost"
          rightIcon={<Icon as={HiOutlineChevronUp} />}
          fontWeight="medium"
          mt={4}
          mx="auto"
          onClick={setShowLicenses.toggle}
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
          onClick={setShowLicenses.toggle}
        >
          See More
        </Button>
      )}
    </>
  ) : (
    <Text>Don&apos;t have any certifications.</Text>
  );
}

export default Licenses;
