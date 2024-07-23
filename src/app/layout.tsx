import { _app_metadata, _app_viewport } from "config/app.config";
import ChakraWrapper from "ui/common/providers/theme.provider";
import { Analytics } from "ui/common/providers/vercel.provider";

export const metadata = _app_metadata;
export const viewport = _app_viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>
          {children}
          <Analytics />
        </ChakraWrapper>
      </body>
    </html>
  );
}
