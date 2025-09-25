
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ** Add this line **  
  output: 'export',

  // Optional: trailing slash handling
  // trailingSlash: true,

  // Jodi image loader use koro:
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.js',
  // },

  // Kono extra config thakle ekhane add koro
};

module.exports = nextConfig;
