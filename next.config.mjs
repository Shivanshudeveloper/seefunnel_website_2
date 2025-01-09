/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static JSON imports
    webpack: (config) => {
      return config;
    }
  };
  
  export default nextConfig;
  
  