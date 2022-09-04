module.exports = {
   async redirects() {
      return [
         {
            source: '/backend',
            destination: '/backend/general-info',
            permanent: false
         },
      ]
   },
}
