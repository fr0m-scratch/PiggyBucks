/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://piggy-bucks.vercel.app/"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/fr0m-scratch/PiggyBucks",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
