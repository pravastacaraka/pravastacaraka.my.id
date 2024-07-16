/** @type {import('next-sitemap').IConfig} */
const cfg = {
  changefreq: "daily",
  priority: 0.7,
  siteUrl: `https://${process.env.NEXT_PUBLIC_SITE_URL}`,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
export default cfg;
