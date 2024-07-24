import { usePathname } from "next/navigation";
import { LinkButton } from "ui/common/components/links/LinkButton/LinkButton";
import { useColorModeValue } from "ui/common/providers/theme.provider";

type Props = {
  href: string;
  children: React.ReactNode;
};

function MobileMenuItem({ children, href }: Props) {
  let isActive = false;
  const pathname = usePathname();
  const linkColor = useColorModeValue("blue.600", "yellow.200");

  if (href !== "/") {
    const [, group] = href.split("/");
    isActive = pathname.includes(group);
  } else if (href === pathname) {
    isActive = true;
  }

  return (
    <LinkButton
      href={href}
      width="full"
      variant="ghost"
      color={isActive && linkColor}
      fontWeight={isActive ? "bold" : "normal"}
      aria-current={isActive ? "page" : undefined}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {children}
    </LinkButton>
  );
}

export default MobileMenuItem;
