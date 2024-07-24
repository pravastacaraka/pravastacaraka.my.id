import NextLink from "next/link";
import { IconButton } from "ui/common/providers/theme.provider";
import { type UrlObject } from "url";

type Props = {
  href: string | UrlObject;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  isExternal?: boolean;
  [x: string]: any;
};

export const LinkIconButton = ({
  href,
  replace,
  scroll,
  shallow,
  prefetch,
  isExternal,
  ...chakraProps
}: Props) => {
  return (
    <IconButton
      as={NextLink}
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      variant="ghost"
      transition="transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .2s cubic-bezier(.39,.575,.565,1), background-color .2s cubic-bezier(.39,.575,.565,1)"
      aria-label=""
      _hover={{
        transform: "scale(1.05)",
      }}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...chakraProps}
    />
  );
};
