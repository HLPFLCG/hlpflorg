// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  // ✅ Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/vip',
        destination: 'https://hlpfl.vip',
        permanent: true,
      },
      {
        source: '/shop',
        destination: 'https://hlpfl.store',
        permanent: true,
      },
      {
        source: '/book',
        destination: 'https://calendly.com/founder-hlpfl/30min',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/book',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;