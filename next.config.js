const { withPlaiceholder } = require("@plaiceholder/next");

module.exports = withPlaiceholder({
  reactStrictMode: true,
  images: {
    domains: ["dl.airtable.com", "v5.airtableusercontent.com"],
  },
});
