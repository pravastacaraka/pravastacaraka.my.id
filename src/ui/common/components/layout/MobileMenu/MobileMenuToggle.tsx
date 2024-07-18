import { _app_routes } from "config/app.config";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "ui/common/providers/theme.provider";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenuItem from "./MobileMenuItem";

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
                {_app_routes.map(({ title, href }) => {
                  if (href === "/") {
                    return;
                  }
                  return (
                    <MobileMenuItem key={title} href={href}>
                      {title}
                    </MobileMenuItem>
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

export default MobileMenuToggle;
