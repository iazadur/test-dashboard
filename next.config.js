// const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} **/
// Next Js Config
const nextConfig = {
    reactStrictMode: true,
    images: { unoptimized: true },
    eslint: {
      dirs: ['.']
    }
    // sentry: {
    //   hideSourceMaps: true
    // }
  }
  
  module.exports = nextConfig
  // module.exports = withSentryConfig(nextConfig)