/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  output: 'export',
  reactStrictMode: true
});
