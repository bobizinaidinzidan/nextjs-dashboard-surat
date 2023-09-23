/** @type {import('next').NextConfig} */
const nextConfig = {};
// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Add a rule to handle PDF files
//     config.module.rules.push({
//       test: /\.(pdf)$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/files',
//             outputPath: 'static/files', // The path to save the PDF files in the output folder
//             name: '[name].[ext]',
//             esModule: false,
//           },
//         },
//       ],
//     });

//     // Important: Return the modified config
//     return config;
//   },
// };

// next.config.js
module.exports = nextConfig;
