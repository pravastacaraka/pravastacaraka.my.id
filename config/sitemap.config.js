const { _app_config } = require("./app.config");

const _sitemap_config = Object.freeze({
  changefreq: "daily",
  generateRobotsTxt: true,
  priority: 0.7,
  siteUrl: _app_config.siteUrl,
});

module.exports = _sitemap_config;
