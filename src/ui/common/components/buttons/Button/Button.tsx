"use client";

import { type LinkProps } from "next/link";
import { type ButtonProps, Button as ChakraButton, useColorModeValue } from "ui/common/providers/theme.provider";

type Props = ButtonProps &
  LinkProps & {
    [x: string]: any;
  };

export const Button = ({ children, variant, ...restProps }: Props) => {
  const blackWhite = useColorModeValue("black", "white");
  const whiteBlack = useColorModeValue("white", "black");
  switch (variant) {
    case "solid":
      return (
        <ChakraButton
          bg={blackWhite}
          color={whiteBlack}
          borderWidth="1px"
          borderColor={blackWhite}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275), 
            border - color .2s cubic - bezier(.39, .575, .565, 1),
            background - color .2s cubic - bezier(.39, .575, .565, 1)
          `}
          _hover={{
            bg: whiteBlack,
            color: blackWhite,
            borderWidth: "1px",
            borderColor: blackWhite,
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
    case "outline":
      return (
        <ChakraButton
          variant={variant}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275), 
            border - color .2s cubic - bezier(.39, .575, .565, 1),
            background - color .2s cubic - bezier(.39, .575, .565, 1)
          `}
          _hover={{
            borderWidth: "1px",
            borderColor: blackWhite,
            transform: "scale(1.05)",
            textDecoration: "none",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
    case "ghost":
      return (
        <ChakraButton
          variant={variant}
          fontSize={{ base: "sm", md: "md" }}
          transform="auto-gpu"
          transition={`
            transform .3s cubic-bezier(.175,.885,.32,1.275)
          `}
          _hover={{
            transform: "scale(1.05)",
          }}
          {...restProps}
        >
          {children}
        </ChakraButton>
      );
  }
};
