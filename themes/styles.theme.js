import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    "html, body": {
      color: mode("black", "white")(props),
      bg: mode("white", "black")(props),
      transition: "none",
    },
    a: {
      color: "#3b82f6",
      fontWeight: "500",
      transition: "color 0.2s ease-out",
      _hover: { color: "#1d4ed8" },
    },
  }),
};

export default styles;
