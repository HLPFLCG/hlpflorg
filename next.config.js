const nextConfig = {
  output: 'export',
  basePath: '/hlpflorg', // 👈 This fixes GitHub Pages
  assetPrefix: '/hlpflorg', // 👈 Makes all CSS/JS/image paths correct
  reactStrictMode: true,
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