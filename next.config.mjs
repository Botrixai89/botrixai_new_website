/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 no longer accepts an `eslint` key here (linting runs via the eslint CLI).
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
