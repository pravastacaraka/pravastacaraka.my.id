import { NextChakraLink } from "@app-components/NextChakraLink";
import { getTable } from "@app-libs/airtable";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { arrayGroupBy } from "helper/function.helper";
import Head from "next/head";
import { useState } from "react";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineNewspaper } from "react-icons/hi";

export async function getStaticProps() {
  // fetch awards from airtable
  const awards = await getTable("Awards", {
    sort: [{ field: "id", direction: "desc" }],
  });
  // fetch licenses from airtable
  const licenses = await getTable("Licenses", {
    sort: [{ field: "id", direction: "desc" }],
  });
  // fetch awards image blur data from plaiceholder
  // const awardsPlaiceholder = await Promise.all(
  //   awards.map(async (item) => {
  //     const path = item.fields?.images ? item.fields.images[0].url : undefined;
  //     const { base64, img } = path != undefined ? await getPlaiceholder(path) : { base64: "", img: "" };
  //     return { base64, img };
  //   })
  // ).then((values) => values);
  // return props
  return {
    props: {
      awards: awards.map((award) => ({ ...award.fields, id: award.id })),
      licenses: licenses.map((license) => ({ ...license.fields, id: license.id })),
      // awardsImgProps: awardsPlaiceholder.map(({ base64, img }) => ({
      //   blurDataURL: base64,
      //   src: img.src,
      //   type: img.type,
      // })),
    },
    revalidate: 60,
  };
}

function Year({ children }) {
  return (
    <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" letterSpacing="tight" mb={4}>
      {children}
    </Heading>
  );
}

function Step({ children, title, news_url }) {
  return (
    <ListItem color={useColorModeValue("gray.600", "gray.400")} mb={4} ml={2}>
      <Flex align="center" mb={2}>
        <Icon as={HiOutlineBadgeCheck} color={useColorModeValue("green.600", "yellow.200")} mr={2} />
        <Text fontWeight="medium" color={useColorModeValue("gray.900", "gray.100")}>
          {title}
        </Text>
      </Flex>
      <Text fontSize="sm" mb={2} ml={6} noOfLines={2}>
        {children}
      </Text>
      {news_url && (
        <Flex align="center" fontSize="sm" ml={6} noOfLines={1}>
          <Icon as={HiOutlineNewspaper} mr={2} />
          <NextChakraLink href={news_url} isExternal>
            {news_url}
          </NextChakraLink>
        </Flex>
      )}
    </ListItem>
  );
}

function SeeMore({ clickHandler }) {
  return (
    <Button
      variant="ghost"
      color={useColorModeValue("gray.900", "gray.100")}
      rightIcon={<Icon as={HiOutlineChevronDown} />}
      fontWeight="medium"
      mt={4}
      mx="auto"
      transform="auto-gpu"
      transition="transform .3s cubic-bezier(.175,.885,.32,1.275), background-color .2s cubic-bezier(.39,.575,.565,1)"
      _hover={{
        transform: "scale(1.05)",
      }}
      onClick={() => clickHandler(true)}
    >
      See More
    </Button>
  );
}

function AchievementPage({ awards, licenses }) {
  const [isShowingFullAwards, showFullAwards] = useState(false);
  const pageMeta = {
    title: "Achievements",
    description: "Here are some of the accomplishment on my journey to becoming a developer.",
  };
  const awardsGroupByYear = arrayGroupBy("year");
  const awardsGroupedByYear = awardsGroupByYear(awards);
  const licensesGroupByYear = arrayGroupBy("year");
  const licensesGroupedByYear = licensesGroupByYear(licenses);
  return (
    <Stack
      as="section"
      minH={{
        base: "calc(100vh - var(--chakra-space-32) - 232px)",
        md: "calc(100vh - var(--chakra-space-32) - 200px)",
      }}
      spacing={8}
    >
      <Head>
        <title>{pageMeta.title} - Pravasta Caraka</title>
        <meta name="description" content={pageMeta.description} />
      </Head>

      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Achievements</Heading>
        <Text>{pageMeta.description}</Text>
      </Stack>

      <Stack spacing={4}>
        <Heading as="h2" fontWeight="semibold" size="lg">
          Awards and Funding
        </Heading>
        <Flex w="full" flexDir="column">
          {awardsGroupedByYear ? (
            <>
              <Stack spacing={4} {...(isShowingFullAwards ? undefined : { maxH: "560px", overflow: "hidden" })}>
                {Object.keys(awardsGroupedByYear)
                  .reverse()
                  .map((year, yearIdx) => {
                    return (
                      <Box key={year}>
                        <Year>{year}</Year>
                        <List>
                          {awardsGroupedByYear[year].map((award) => (
                            <Step key={award.id} news_url={award.news_url} title={award.title}>
                              {award.desc}
                            </Step>
                          ))}
                        </List>
                        {Object.keys(awardsGroupedByYear).length - 1 !== yearIdx && <Divider mb={2} />}
                      </Box>
                    );
                  })}
              </Stack>
              {!isShowingFullAwards && <SeeMore clickHandler={showFullAwards} />}
            </>
          ) : (
            <Box>
              <Text>Don&apos;t have any awards and funding.</Text>
            </Box>
          )}
        </Flex>
      </Stack>

      <Stack spacing={4}>
        <Heading as="h2" fontWeight="semibold" size="lg">
          Licenses and Certifications
        </Heading>
        <Flex w="full" flexDir="column">
          {licensesGroupedByYear ? (
            <>
              <Stack spacing={4} {...(isShowingFullAwards ? undefined : { maxH: "560px", overflow: "hidden" })}>
                {Object.keys(licensesGroupedByYear)
                  .reverse()
                  .map((year, yearIdx) => {
                    return (
                      <Box key={year}>
                        <Year>{year}</Year>
                        <List>
                          {licensesGroupedByYear[year].map((license) => (
                            <Step key={license.id} news_url={license.organizer_url} title={license.title}>
                              {license.desc}
                            </Step>
                          ))}
                        </List>
                        {Object.keys(licensesGroupedByYear).length - 1 !== yearIdx && <Divider mb={2} />}
                      </Box>
                    );
                  })}
              </Stack>
              {!isShowingFullAwards && <SeeMore clickHandler={showFullAwards} />}
            </>
          ) : (
            <Box>
              <Text>Don&apos;t have any certifications.</Text>
            </Box>
          )}
        </Flex>
      </Stack>
    </Stack>
  );
}

export default AchievementPage;
