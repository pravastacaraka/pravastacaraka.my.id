import ReactMarkdown, { type Components } from "react-markdown";
import { Link } from "ui/common/components/links/Link/Link";
import { Text } from "ui/common/providers/theme.provider";

export const BaseMarkdown: Components = {
  a({ node, ...rest }) {
    if (!rest.href) {
      return;
    }
    const href: string = rest.href;
    return <Link isExternal={!href.startsWith("#") && !href.startsWith("/")} {...rest} />;
  },
  p({ node, ...rest }) {
    return <Text {...rest} />;
  },
};

export const CustomReactMarkdown = ({ children }: Readonly<{ children: string }>) => (
  <ReactMarkdown components={BaseMarkdown}>{children}</ReactMarkdown>
);
