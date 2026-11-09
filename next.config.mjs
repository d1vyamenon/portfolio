/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Build a fully static site into /out so it can be hosted on GitHub Pages.
  output: 'export',
  basePath,
  // /about/ -> /about/index.html, which GitHub Pages serves without extra config.
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
