"use client";

import customTheme from "@app-styles/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const ChakraWrapper = ({ children }) => (
  <ChakraProvider theme={customTheme}>
    <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
    {children}
  </ChakraProvider>
);

export default ChakraWrapper;

export {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Tag,
  Text,
  Textarea,
  useBoolean,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
