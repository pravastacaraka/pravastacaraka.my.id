export const _app_config = Object.freeze({
  domain: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  baseUrl: `https://${process.env.NEXT_PUBLIC_SITE_URL}`,
});

export const _app_routes = Object.freeze([
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
    title: "Skills",
    href: "/about#skills",
  },
  {
    title: "Achievements",
    href: "/about#achievements",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]);
