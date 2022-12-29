"use client";

import { _app_routes } from "@app-config/app.config";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@app-providers/chakra-ui";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileMenuButton from "./mobile-menu-button";
import MobileMenuItem from "./mobile-menu-item";

function MobileMenuToggle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MobileMenuButton label="Menu" icon={HiOutlineMenuAlt1} onClick={onOpen} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" autoFocus={false}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius={6}>
            <DrawerCloseButton />
            <DrawerHeader fontSize="18px">Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                {_app_routes.map(({ title, href }) => (
                  <MobileMenuItem key={title} href={href}>
                    {title}
                  </MobileMenuItem>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default MobileMenuToggle;
