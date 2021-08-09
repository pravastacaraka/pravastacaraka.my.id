import Container from "@app-themes/components/container";
import config from "@app-themes/config.theme";
import fonts from "@app-themes/foundations/fonts";
import styles from "@app-themes/styles.theme";
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config,
  fonts,
  styles,
  components: {
    Container,
  },
});

export default customTheme;
