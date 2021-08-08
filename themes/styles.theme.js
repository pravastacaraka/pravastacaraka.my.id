import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    "html, body": {
      color: mode("black", "white")(props),
      bg: mode("white", "black")(props),
      transition: "none",
    },
    a: {
      color: mode("blue.500", "blue.200")(props),
      fontWeight: "500",
      transition: "color 0.2s ease-out",
      _hover: { color: mode("blue.600", "blue.300")(props) },
    },
  }),
};

export default styles;
