/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old URL scheme. These paths are indexed and linked from elsewhere,
    // so they are kept permanently rather than dropped.
    return [
      { source: '/projects', destination: '/work', permanent: true },
      { source: '/projects/research/tool', destination: '/work/research/tool', permanent: true },
      { source: '/projects/:slug', destination: '/work/:slug', permanent: true },
      // Pages from earlier versions of the site that no longer exist on their own.
      { source: '/about', destination: '/profile', permanent: true },
      { source: '/deep-work', destination: '/work/deep-work', permanent: true },
      { source: '/work/uber', destination: '/profile#experience', permanent: true },
      // The blog moved to its own site; the old article paths do not exist there.
      { source: '/blog', destination: 'https://astradedman.vercel.app/', permanent: true },
      { source: '/blog/:path*', destination: 'https://astradedman.vercel.app/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
