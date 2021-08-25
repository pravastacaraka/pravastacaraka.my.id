import { NextChakraLink } from "@app-components/NextChakraLink";
import { Text } from "@chakra-ui/react";

export const BaseMarkdown = {
  a({ node, ...rest }) {
    const href = rest.href;
    return <NextChakraLink isExternal={!href.startsWith("#")} {...rest} />;
  },

  p({ node, ...rest }) {
    return <Text as="div" {...rest} />;
  },
};
