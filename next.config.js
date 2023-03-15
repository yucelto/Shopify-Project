/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
