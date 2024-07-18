"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import customTheme from "ui/common/styles/theme";

const ChakraWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
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
  type ButtonProps,
  type StackProps,
} from "@chakra-ui/react";
