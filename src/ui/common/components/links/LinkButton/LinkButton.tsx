import NextLink from "next/link";
import { Button } from "ui/common/components/buttons/Button/Button";
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

export const LinkButton = ({ href, replace, scroll, shallow, prefetch, isExternal, ...chakraProps }: Props) => {
  return (
    <Button
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
