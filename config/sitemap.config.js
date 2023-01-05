const { _app_config } = require("./app.config");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  changefreq: "daily",
  priority: 0.7,
  siteUrl: _app_config.siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
