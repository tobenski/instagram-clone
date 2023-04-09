/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [ 
      'upload.wikimedia.org',
      'i.pinimg.com',
      'i.pravatar.cc'
      ]
  }
}

module.exports = nextConfig
