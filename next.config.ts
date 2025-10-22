// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // true = 301, false = 302
      },
    ];
  },
};

module.exports = nextConfig;
