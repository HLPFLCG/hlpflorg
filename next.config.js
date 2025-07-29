/** @type {import('next').NextConfig} */

// Check if we’re deploying to GitHub Pages
const isGitHubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for next/image to work in static export
  },
  basePath: isGitHubPages ? '/hlpflorg' : '',
  assetPrefix: isGitHubPages ? '/hlpflorg/' : '',

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