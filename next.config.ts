import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://qqy5w5cucihx6ygm.public.blob.vercel-storage.com/**')]
  }
}

export default nextConfig
