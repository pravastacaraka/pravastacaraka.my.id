import MobileMenuItem from "@app-components/mobile-menu/mobile-menu-item";
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
