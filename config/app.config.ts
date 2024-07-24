import { Metadata, Viewport } from "next";

const _app_metadata: Metadata = {
  title: {
    default: "Pravasta Caraka",
    template: "%s - Pravasta Caraka",
  },
  description: `Web and mobile developer enthusiast.`,
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/favicon/favicon.ico",
    apple: [
      {
        url: "/assets/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/assets/favicon/site.webmanifest",
  authors: {
    name: "Pravasta Caraka Bramastagiri",
    url: "https://pravastacaraka.my.id",
  },
};

const _app_viewport: Viewport = {
  width: 1,
  themeColor: "#ffffff",
};

const _app_routes = Object.freeze([
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Achievements",
    href: "/achievements",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]);

export { _app_metadata, _app_routes, _app_viewport };
