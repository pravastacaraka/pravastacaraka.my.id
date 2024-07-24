import { _app_metadata, _app_viewport } from "config/app.config";
import ChakraWrapper from "ui/common/providers/theme.provider";
import { Analytics, SpeedInsights } from "ui/common/providers/vercel.provider";

export const metadata = _app_metadata;
export const viewport = _app_viewport;

function RootLayout({
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
          <SpeedInsights />
        </ChakraWrapper>
      </body>
    </html>
  );
}

export default RootLayout;
