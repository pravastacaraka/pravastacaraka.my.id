"use client";

import { NextChakraLink } from "@app-components/NextChakraLink";
import { Text } from "@app-providers/chakra-ui";
import ReactMarkdown from "react-markdown";

export const BaseMarkdown = {
  a({ node, ...rest }) {
    const href = rest.href;
    return <NextChakraLink isExternal={!href.startsWith("#")} {...rest} />;
  },
  p({ node, ...rest }) {
    return <Text {...rest} />;
  },
};

export const CustomReactMarkdown = ({ children }) => (
  <ReactMarkdown components={BaseMarkdown}>{children}</ReactMarkdown>
);
