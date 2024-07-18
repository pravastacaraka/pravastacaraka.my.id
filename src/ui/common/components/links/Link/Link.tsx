import NextLink from "next/link";
import { Link as ChakraLink } from "ui/common/providers/theme.provider";

type Props = {
  href?: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  isExternal?: boolean;
  [x: string]: any;
};

export const Link = ({ href, replace, scroll, shallow, prefetch, isExternal, ...chakraProps }: Props) => {
  return (
    <ChakraLink
      as={NextLink}
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      {...chakraProps}
    />
  );
};
