/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
    remotePatterns: [
        {
          protocol: 'https',
          hostname: '', // Empty string allows all domains
        }
       /* {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // Empty string allows all domains
        },
        {
          protocol: 'https',
          hostname: 'images.google.com', // Empty string allows all domains
        },*/
      ],
      // domains: ['lh3.googleusercontent.com', 'images.google.com', 'google.com', 'i.ytimg.com'], // Old syntax
    },
};

export default nextConfig;
