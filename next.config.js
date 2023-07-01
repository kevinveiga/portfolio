/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = withBundleAnalyzer({
  basePath: '/portfolio',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    loader: 'akamai',
    path: ''
  },
  reactStrictMode: true
});
