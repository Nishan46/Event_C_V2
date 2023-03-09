/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode:false,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'img.freepik.com'
      },
      {
        protocol:'https',
        hostname:'images.pexels.com'
      },
      {
        protocol:'https',
        hostname:'raw.githubusercontent.com'
      }
    ]
  }
}

module.exports = nextConfig
