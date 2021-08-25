import { Button, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// has to be a new component because both chakra and next share the `as` keyword
const NextChakraLink = ({ href, as, replace, scroll, shallow, prefetch, ...chakraProps }) => {
  return (
    <NextLink href={href} as={as} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch} passHref>
      <ChakraLink {...chakraProps} />
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
    <NextLink href={href} as={as} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch} passHref>
      <Button
        as="a"
        transition="transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .2s cubic-bezier(.39,.575,.565,1), background-color .2s cubic-bezier(.39,.575,.565,1)"
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
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
    <NextLink href={href} as={as} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch} passHref>
      <IconButton
        as="a"
        transition="transform .3s cubic-bezier(.175,.885,.32,1.275), border-color .2s cubic-bezier(.39,.575,.565,1), background-color .2s cubic-bezier(.39,.575,.565,1)"
        variant="ghost"
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...chakraProps}
      />
    </NextLink>
  );
};

export { NextChakraLink, NextChakraLinkButton, NextChakraLinkIconButton };
