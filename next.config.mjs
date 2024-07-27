// /** @type {import('next').NextConfig} */
// const withNextIntl = require("next-intl/plugin")("./next-intl.config.js");

// const nextConfig = {};

// module.exports = withNextIntl({
//   // Other Next.js configuration options go here
//   nextConfig,
// });


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);