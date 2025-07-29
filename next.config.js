/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hlpflorg', // 👈 Required for GitHub Pages
  assetPrefix: '/hlpflorg', // 👈 Ensures assets load correctly
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for `next export` with images
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