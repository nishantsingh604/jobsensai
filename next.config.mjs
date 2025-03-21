/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        // pathname: "/api/portraits/**" // Ensure all portrait images are allowed
      }
    ]
  }
};

export default nextConfig;
