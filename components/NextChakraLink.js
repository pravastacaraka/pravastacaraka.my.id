import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

// has to be a new component because both chakra and next share the `as` keyword
const NextChakraLink = ({ href, as, replace, scroll, shallow, prefetch, ...chakraProps }) => {
  return (
    <NextLink passHref href={href} as={as} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch}>
      <ChakraLink transition="none" _hover={{ textDecoration: "none" }} {...chakraProps} />
    </NextLink>
  );
};

export default NextChakraLink;
