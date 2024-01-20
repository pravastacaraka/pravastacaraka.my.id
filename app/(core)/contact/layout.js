import { Flex, Heading, Stack, Text } from "@app-providers/chakra-ui";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Get in Touch",
  description: `Are you looking for a discussion partner or someone you can trust to help with your website?`,
};

function ContactLayout({ children }) {
  return (
    <Stack as="section" spacing={8}>
      <Stack spacing={4} textAlign="center">
        <Heading as="h1">Get in Touch</Heading>
      </Stack>

      <Stack spacing={4}>
        <Text as="h2" lineHeight="tall">
          Are you looking for a discussion partner or someone you can trust to help with your website?
        </Text>
        <Text lineHeight="tall">
          If so, I am the right person and open for you to contact. There is no limit to contact me. There are
          several options that you can choose to chat, discuss, or just say hello.
        </Text>
      </Stack>

      {children}

      <Stack spacing={4}>
        <Heading as="h2" fontWeight="semibold" size="lg">
          My Location
        </Heading>
        <Text lineHeight="tall">
          I am open if you want to discuss face to face. I am a software developer who lives in the district of
          Gedangan, Sidoarjo, East Java, ID.
        </Text>
        <Flex pos="relative">
          <Flex overflow="hidden" w="full" h="400px">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
              src="https://maps.google.com/maps?width=1000&amp;height=600&amp;hl=en&amp;q=Gedangan Sidoarjo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default ContactLayout;
