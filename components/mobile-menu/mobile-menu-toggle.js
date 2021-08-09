import MobileMenuItem from "@app-components/mobile-menu/mobile-menu-item";
import { MENU_LINKS } from "@app-config/app.config";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import MobileMenuButton from "./mobile-menu-button";

function MobileMenuToggle() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MobileMenuButton label="Menu" icon={HiOutlineMenuAlt1} onClick={onOpen} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" autoFocus={false}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius={6}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack>
                {MENU_LINKS.map(({ title, path }) => (
                  <MobileMenuItem key={title} title={title} href={path} />
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
