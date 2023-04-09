/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [ 
      'upload.wikimedia.org',
      'i.pinimg.com'
      ]
  }
}

module.exports = nextConfig
