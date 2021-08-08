import { MENU_LINKS } from "@app-config/app.config";
import { Avatar, Button, Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { ThemeToggle } from "./Button";

function NavLink({ title, path, isActive }) {
  return (
    <Link href={path}>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        px={4}
        size="md"
        color="gray.500"
        transition="color 0.2s ease-out"
        _hover={{ color: useColorModeValue("gray.800", "gray.200") }}
        _activeLink={{
          color: useColorModeValue("gray.800", "gray.200"),
        }}
      >
        {title}
      </Button>
    </Link>
  );
}

function Header() {
  const { pathname } = useRouter();
  let isActive = false;

  return (
    <Flex
      as="nav"
      w="full"
      my={{ base: 6, md: 8 }}
      d={{ base: "none", md: "flex" }}
      color={useColorModeValue("gray.900", "gray.100")}
      // bg={useColorModeValue("white", "black")}
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="saturate(180%) blur(20px)"
      transition="background-color 0.2s ease-in-out"
      opacity={60}
    >
      <Flex alignItems="center" justifyContent="space-between" w="full" maxW="4xl" p={8} mx="auto">
        <Link href="/">
          <Avatar name="Pravasta Caraka" size="sm" cursor="pointer" />
        </Link>
        <HStack>
          {MENU_LINKS.map(({ title, path }) => {
            if (path !== "/") {
              const [, group] = path.split("/");
              isActive = pathname.includes(group);
            } else {
              if (path === pathname) isActive = true;
            }
            return <NavLink title={title} path={path} isActive={isActive} key={title} />;
          })}
        </HStack>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}

export default Header;
