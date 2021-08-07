import { MENU_LINKS } from "@app-config/app.config";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { HiHome, HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavButton, ThemeToggle } from "./Button";

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
        <NavButton label="Home" icon={HiHome} />
        <MenuToggle />
        <ThemeToggle mobile />
      </Grid>
    </MotionBox>
  );
}

function MenuToggle() {
  const { pathname } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  let isActive = false;

  return (
    <>
      <NavButton label="Menu" icon={HiOutlineMenuAlt1} onClick={onOpen} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" autoFocus={false}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius={6}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                {MENU_LINKS.map(({ title, path }) => {
                  if (path !== "/") {
                    const [, group] = path.split("/");
                    isActive = pathname.includes(group);
                  } else {
                    if (path === pathname) isActive = true;
                  }
                  return (
                    <Link href={path} key={title}>
                      <Button
                        w="full"
                        size="lg"
                        aria-current={isActive ? "page" : undefined}
                        _activeLink={{
                          color: useColorModeValue("blue.500", "blue.200"),
                        }}
                      >
                        {title}
                      </Button>
                    </Link>
                  );
                })}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default MobileNavigation;
