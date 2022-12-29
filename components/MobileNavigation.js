"use client";

import MobileMenuButton from "@app-components/mobile-menu/mobile-menu-button";
import MobileMenuToggle from "@app-components/mobile-menu/mobile-menu-toggle";
import { Box, Grid, useBoolean, useColorModeValue } from "@app-providers/chakra-ui";
import { motion } from "framer-motion";
import { HiHome } from "react-icons/hi";
import { ThemeToggle } from "./Button";
import { NextChakraLink } from "./NextChakraLink";

function MobileNavigation() {
  const [isOpen, toggleOpen] = useBoolean();
  const MotionBox = motion(Box);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "close"}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      w="full"
      display={{ base: "block", md: "none" }}
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        align="center"
        py={2}
        bg={useColorModeValue("white", "black")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("gray.100", "gray.800")}
        shadow="0 -2px 10px 0 rgba(0, 0, 0, 0.035)"
        minHeight="60px"
      >
        <NextChakraLink href="/" borderBottomWidth="0px">
          <MobileMenuButton label="Home" icon={HiHome} />
        </NextChakraLink>
        <MobileMenuToggle onClick={toggleOpen} />
        <ThemeToggle isMobile={true} />
      </Grid>
    </MotionBox>
  );
}

export default MobileNavigation;
