/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gif|svg)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
