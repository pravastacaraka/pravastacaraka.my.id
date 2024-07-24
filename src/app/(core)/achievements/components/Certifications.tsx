"use client";

import type { Certification } from "domain/Certification/models/Certification";
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
  data: Certification[] | null;
};

type Accumulator = {
  count: number;
  items: JSX.Element[];
  idx: number;
};

const Certifications = ({ data }: Props) => {
  const [show, setShow] = useBoolean();
  const iconColor = useColorModeValue("blue.600", "yellow.200");

  if (!data) {
    return <CustomReactMarkdown>Don&apos;t have any certifications.</CustomReactMarkdown>;
  }

  const certificationsGroupedByYear = mapBy<Certification>("year", data);

  return (
    <Flex direction="column">
      {
        Object.entries(certificationsGroupedByYear)
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
                    {records.map((record) => {
                      if (acc.count >= 4 && !show) {
                        divide = false;
                        return null;
                      }

                      acc.count++;

                      let certURL;
                      try {
                        certURL = new URL(record.cert_url);
                      } catch {}

                      return (
                        <ListItem key={record.id} ml={2} textAlign="justify">
                          <Flex align="center" mb={2}>
                            <Icon as={HiOutlineBadgeCheck} color={iconColor} mr={2} />
                            <Text fontWeight="semibold">{record.title}</Text>
                          </Flex>
                          <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6}>
                            {record.desc}
                          </Text>
                          {certURL && (
                            <Text fontSize={{ base: "xs", md: "sm" }} mb={2} ml={6}>
                              <Link href={certURL.href} isExternal>
                                Show certification
                              </Link>
                            </Text>
                          )}
                        </ListItem>
                      );
                    })}
                  </List>
                  {divide && Object.keys(certificationsGroupedByYear).length - 1 !== acc.idx && <Divider mb={4} />}
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

export default Certifications;
