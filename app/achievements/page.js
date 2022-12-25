import { Flex, Heading, Stack } from "@app-providers/chakra-ui";
import Awards from "./Awards";
import Licenses from "./Licenses";

function Page() {
  return (
    <>
      <Stack spacing={4}>
        <Heading as="h2" fontWeight="semibold" size="lg">
          Awards and Funding
        </Heading>
        <Flex w="full" flexDir="column">
          <Awards />
        </Flex>
      </Stack>

      <Stack spacing={4}>
        <Heading as="h2" fontWeight="semibold" size="lg">
          Licenses and Certifications
        </Heading>
        <Flex w="full" flexDir="column">
          <Licenses />
        </Flex>
      </Stack>
    </>
  );
}

export default Page;
