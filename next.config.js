/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
