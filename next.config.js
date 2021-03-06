const withPWA = require('next-pwa')
const withVideos = require('next-videos')
 
module.exports = withVideos(withPWA({
  pwa: {
    //dest: 'public',
    //sw: 'OneSignalSDKWorker.js',
    disable: true
  },
  async redirects() {
    return [
      /*{
        source: '/_error',
        destination: '/',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/',
        permanent: true,
      }*/
      //https://nextjs.org/docs/api-reference/next.config.js/redirects
    ];
  },
}))