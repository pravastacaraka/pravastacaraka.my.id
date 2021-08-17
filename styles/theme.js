import Container from "@app-styles/components/container";
import Heading from "@app-styles/components/heading";
import fonts from "@app-styles/foundations/fonts";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const styles = {
  global: (props) => ({
    "html, body": {
      minW: "320px",
      color: mode("black", "white")(props),
      bg: mode("white", "black")(props),
      transition: "none",
      scrollBehavior: "smooth",
    },
    a: {
      color: "#3b82f6",
      fontWeight: "500",
      transition: "color 0.2s ease-out",
      _hover: { color: "#1d4ed8" },
    },
  }),
};

const customTheme = extendTheme({
  config,
  fonts,
  styles,
  components: {
    Container,
    Heading,
  },
});

export default customTheme;
