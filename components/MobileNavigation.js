import MobileMenuButton from "@app-components/mobile-menu/mobile-menu-button";
import MobileMenuToggle from "@app-components/mobile-menu/mobile-menu-toggle";
import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { ThemeToggle } from "./Button";

function MobileNavigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
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
      >
        <Link href="/" passHref>
          <MobileMenuButton label="Home" icon={HiHome} />
        </Link>
        <MobileMenuToggle onClick={() => toggleOpen()} />
        <ThemeToggle mobile />
      </Grid>
    </MotionBox>
  );
}

export default MobileNavigation;
