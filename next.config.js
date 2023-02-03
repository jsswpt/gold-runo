/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.insales-cdn.com",
        pathname: "/images/products/**/**/**/**",
      },
    ],
  },
};

module.exports = nextConfig;
