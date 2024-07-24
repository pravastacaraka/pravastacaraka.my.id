import { Button } from "ui/common/components/buttons/Button/Button";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from "ui/common/providers/theme.provider";

function Page() {
  return (
    <Stack as="form" spacing={4} width="full">
      <FormControl id="subject" isRequired>
        <FormLabel>Subject</FormLabel>
        <Select placeholder="Please select one...">
          <option>Project Discussion</option>
          <option>Event Invitation</option>
          <option>Other</option>
        </Select>
      </FormControl>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
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
        <Textarea minHeight="200px"></Textarea>
      </FormControl>
      <Flex justify="flex-end">
        <Button variant="solid" type="submit" width={{ base: "full", md: "20%" }}>
          Send
        </Button>
      </Flex>
    </Stack>
  );
}

export default Page;
