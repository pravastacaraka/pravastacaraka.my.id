"use client";

import customTheme from "@app-styles/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

function ChakraWrapper({ children }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}

export * from "@chakra-ui/react";
export { ChakraWrapper };
