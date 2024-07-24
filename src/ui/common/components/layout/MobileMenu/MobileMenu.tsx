"use client";

import { HiHome } from "react-icons/hi";
import { Link } from "ui/common/components/links/Link/Link";
import { Box, Grid, useColorModeValue } from "ui/common/providers/theme.provider";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuToggle from "./MobileMenuToggle";
import { ThemeToggle } from "../../buttons/Toggle/Toggle";

export default function MobileMenu() {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      width="full"
      minHeight="60px"
      display={{ base: "block", md: "none" }}
    >
      <Grid
        templateColumns="repeat(3, 1fr)"
        py={2}
        justifyItems="center"
        bg={useColorModeValue("white", "black")}
        borderTopWidth="2px"
        borderTopColor={useColorModeValue("gray.100", "gray.800")}
        shadow="0 -2px 10px 0 rgba(0, 0, 0, 0.035)"
      >
        <Link href="/" borderBottomWidth="0px">
          <MobileMenuButton label="Home" icon={HiHome} />
        </Link>
        <MobileMenuToggle />
        <ThemeToggle isMobile={true} />
      </Grid>
    </Box>
  );
}
