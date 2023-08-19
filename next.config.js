/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
/* eslint-enable @typescript-eslint/no-var-requires */

const dev = process.env.NODE_ENV === 'development'

module.exports = withBundleAnalyzer({
  assetPrefix: dev ? '' : '/portfolio',
  basePath: dev ? '' : '/portfolio',
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true
})
