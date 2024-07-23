"use client";

import type { Award } from "domain/Award/models/Award";
import { HiOutlineBadgeCheck, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { Link } from "ui/common/components/links/Link/Link";
import { CustomReactMarkdown } from "ui/common/components/markdown/Markdown";
import {
  Button,
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
} from "ui/common/providers/theme.provider";
import { mapBy } from "ui/common/utils/utils";

type Props = {
  data: Award[] | null;
};

type Accumulator = {
  count: number;
  items: JSX.Element[];
  idx: number;
};

const Awards = ({ data }: Props) => {
  const [show, setShow] = useBoolean();
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data) {
    return <CustomReactMarkdown>Don&apos;t have any awards.</CustomReactMarkdown>;
  }

  const awardsGroupedByYear = mapBy<Award>("year", data);

  return (
    <Flex direction="column">
      {
        Object.entries(awardsGroupedByYear)
          .reverse()
          .reduce<Accumulator>(
            (acc, [year, records]) => {
              let divide = true;

              if (acc.count >= 4 && !show) {
                return acc;
              }

              acc.items.push(
                <Stack key={year} spacing={4} mb={4}>
                  <Heading as="h3" fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                    {year}
                  </Heading>
                  <List>
                    {records.map((record, idx) => {
                      if (acc.count >= 4 && !show) {
                        divide = false;
                        return null;
                      }

                      acc.count++;

                      let newsURL;
                      try {
                        newsURL = new URL(record.news_url);
                      } catch {}

                      return (
                        <ListItem key={`${year}-${idx}`} ml={2} textAlign="justify">
                          <Flex align="center" mb={2}>
                            <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                            <Text fontWeight="semibold">{record.title}</Text>
                          </Flex>
                          <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6}>
                            {record.desc}
                          </Text>
                          {newsURL && (
                            <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6}>
                              <Link href={newsURL.href} isExternal>
                                Read more
                              </Link>
                            </Text>
                          )}
                        </ListItem>
                      );
                    })}
                  </List>
                  {divide && Object.keys(awardsGroupedByYear).length - 1 !== acc.idx && <Divider mb={4} />}
                </Stack>,
              );

              acc.idx++;
              return acc;
            },
            { count: 0, items: [], idx: 0 },
          ).items
      }
      <Button
        variant="ghost"
        rightIcon={<Icon as={show ? HiOutlineChevronUp : HiOutlineChevronDown} />}
        mx="auto"
        onClick={setShow.toggle}
      >
        {show ? "Show Less" : "See More"}
      </Button>
    </Flex>
  );
};

export default Awards;
