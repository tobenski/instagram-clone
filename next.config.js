/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [ 
      'upload.wikimedia.org',
      'i.pinimg.com',
      'i.pravatar.cc',
      'plus.unsplash.com',
      'images.unsplash.com',
      'superviral.com.au',
      'socodigital.com',
      'lh3.googleusercontent.com',
      'firebasestorage.googleapis.com'
      ]
  }
}

module.exports = nextConfig
