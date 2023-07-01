/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = withBundleAnalyzer({
  assetPrefix: '/portfolio',
  basePath: '/portfolio',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true
});
