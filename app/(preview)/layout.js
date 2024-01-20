import { _app_metadata, _app_viewport } from "@app-config/app.config";
import { ChakraWrapper } from "@app-providers/chakra-ui";
import { Analytics } from "@app-providers/vercel";

export const metadata = _app_metadata;
export const viewport = _app_viewport;

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </head>
      <body>
        <ChakraWrapper>
          <main>
            {children}
            <Analytics />
          </main>
        </ChakraWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
