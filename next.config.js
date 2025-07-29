// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // Enables static export
  distDir: 'docs',                  // Outputs the build into the 'docs' folder for GitHub Pages
  reactStrictMode: true,
  images: {
    unoptimized: true              // Required for static export to work without Next.js Image Optimization
  },
  // Redirects are not supported in static export (they get ignored)
  // We'll keep them here for potential future use on a non-static host
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
  }
};

module.exports = nextConfig;