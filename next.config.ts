import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Set the output mode for static site generation
  trailingSlash: true,  // Ensure trailing slashes for better static site handling
};

export default nextConfig;
