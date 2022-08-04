/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
    removeConsole: true,
  },
  i18n: {
    locales: ["en", "pt", "fr", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
