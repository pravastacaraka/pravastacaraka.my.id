import { _app_routes } from "config/app.config";
import { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  const routes = _app_routes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${route.href}`,
    lastModified: new Date(),
  }));

  return [...routes];
}

export default sitemap;
