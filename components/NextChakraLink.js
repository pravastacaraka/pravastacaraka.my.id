import { Button, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// has to be a new component because both chakra and next share the `as` keyword
const NextChakraLink = ({ href, as, replace, scroll, shallow, prefetch, isExternal = false, ...chakraProps }) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <ChakraLink as="button" {...chakraProps} />
    </NextLink>
  );
};

const NextChakraLinkButton = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  isExternal = false,
  ...chakraProps
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <Button
        transition="transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .2s cubic-bezier(.39,.575,.565,1), background-color .2s cubic-bezier(.39,.575,.565,1)"
        {...chakraProps}
      />
    </NextLink>
  );
};

const NextChakraLinkIconButton = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  isExternal = false,
  ...chakraProps
}) => {
  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      <IconButton
        transition="transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .2s cubic-bezier(.39,.575,.565,1), background-color .2s cubic-bezier(.39,.575,.565,1)"
        variant="ghost"
        {...chakraProps}
      />
    </NextLink>
  );
};

export { NextChakraLink, NextChakraLinkButton, NextChakraLinkIconButton };
