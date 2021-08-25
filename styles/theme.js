import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const fonts = {
  body: `'Inter', ${defaultTheme.fonts.body}`,
  heading: `'Inter', ${defaultTheme.fonts.heading}`,
};

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      minW: "320px",
      color: mode("black", "white")(props),
      bg: mode("white", "black")(props),
      transition: "none",
    },
  }),
};

const customTheme = extendTheme({
  config,
  fonts,
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
        fontWeight: 800,
        letterSpacing: "tighter",
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode("#2756a3", "yellow.200")(props),
        fontWeight: "500",
        _hover: {
          color: mode("#2756a3", "yellow.200")(props),
          textDecoration: "underline",
        },
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode("gray.600", "gray.400")(props),
      }),
    },
  },
});

export default customTheme;
