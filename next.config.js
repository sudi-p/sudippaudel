/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      { source: '/grammar', destination: '/celpip/grammar' },
      { source: '/grammar/:path*', destination: '/celpip/grammar/:path*' },
      { source: '/communication', destination: '/celpip/communication' },
      { source: '/vocab', destination: '/celpip/vocab' },
    ]
  },
}

module.exports = nextConfig
