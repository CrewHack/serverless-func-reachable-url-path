const withPWA = require('next-pwa')
 
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: 'https://serverless-func-reachable-url-path.vercel.app/',
    sw: 'sw.js',
  }
})