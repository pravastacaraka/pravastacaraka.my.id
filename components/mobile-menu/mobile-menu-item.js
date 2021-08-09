import { Button, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

function MobileMenuItem({ href, title, toggle }) {
  const { pathname } = useRouter();
  let isActive = false;

  if (href !== "/") {
    const [, group] = href.split("/");
    isActive = pathname.includes(group);
  } else {
    if (href === pathname) isActive = true;
  }

  return (
    <Link href={href} passHref>
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
}

export default MobileMenuItem;
