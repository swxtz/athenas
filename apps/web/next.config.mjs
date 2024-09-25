/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "https://megag.com.br",
      },
      {
        protocol: "https",
        hostname: "www.riosoftice.com.br",
      },
      {
        protocol: "https",
        hostname: "lambweston.scene7.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "brasa.com.br",
      }
    ],
  },
};

export default nextConfig;
