/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  reactStrictMode: true,
  sassOptions: {
    prependData: `@import "@/styles/mixins";`,
  },
}

module.exports = nextConfig
