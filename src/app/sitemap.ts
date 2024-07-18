import { _app_routes } from "config/app.config";
import { MetadataRoute } from "next";

function sitemap(): MetadataRoute.Sitemap {
  const routes = _app_routes.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes];
}

export default sitemap;
