import { Button } from "@app-components/Button";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from "@app-providers/chakra-ui";

function Page() {
  return (
    <Stack as="form" spacing={4} w="full">
      <FormControl id="subject" isRequired>
        <FormLabel>Subject</FormLabel>
        <Select placeholder="Please select one...">
          <option>Project Discussion</option>
          <option>Event Invitation</option>
          <option>Other</option>
        </Select>
      </FormControl>
      <SimpleGrid columns={{ base: 1, md: 2 }} align="center" spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} align="center" spacing={4}>
        <FormControl id="phone">
          <FormLabel>Phone (Optional)</FormLabel>
          <Input defaultValue="+62" />
        </FormControl>
        <FormControl id="organization">
          <FormLabel>Organization (Optional)</FormLabel>
          <Input />
        </FormControl>
      </SimpleGrid>
      <FormControl id="message" isRequired>
        <FormLabel>Message</FormLabel>
        <Textarea minH="200px"></Textarea>
      </FormControl>
      <Flex justify="flex-end">
        <Button type="submit" width={{ base: "full", md: "20%" }}>
          Send
        </Button>
      </Flex>
    </Stack>
  );
}

export default Page;
