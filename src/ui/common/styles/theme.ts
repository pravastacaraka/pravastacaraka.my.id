import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { type StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const breakpoints = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      minW: "320px",
      color: mode("black", "white")(props),
      bg: mode("white", "black")(props),
      fontSize: { base: "sm", md: "md" },
      ...inter.style,
    },
  }),
};

const customTheme = extendTheme({
  breakpoints,
  config,
  styles,
  components: {
    Container: {
      baseStyle: {
        w: "full",
        maxW: "4xl",
        px: { base: "6", md: "8" },
      },
    },
    Heading: {
      baseStyle: {
        letterSpacing: "tighter",
        fontWeight: 800,
        ...inter.style,
      },
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("blue.600", "yellow.200")(props),
        fontWeight: "500",
        borderBottom: { base: "1px dotted", lg: "2px dotted" },
        _hover: {
          textDecoration: "none",
          color: mode("blue.500", "yellow.100")(props),
        },
      }),
    },
    Text: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: mode("gray.700", "gray.200")(props),
        lineHeight: "tall",
      }),
    },
  },
});

export default customTheme;
