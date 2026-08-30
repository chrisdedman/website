/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old URL scheme. These paths are indexed and linked from elsewhere,
    // so they are kept permanently rather than dropped.
    return [
      { source: '/profile', destination: '/about', permanent: true },
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/projects/research/tool', destination: '/work/research/tool', permanent: true },
      { source: '/projects/:slug', destination: '/work/:slug', permanent: true },
    ];
  },
};

module.exports = nextConfig;
