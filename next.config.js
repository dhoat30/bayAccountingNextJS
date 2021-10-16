const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "http://localhost/bay-accounting"
      },
      reactStrictMode: true,
      images: {
        domains: ['http://localhost/bay-accounting']
      }
    }
  }
  return {
    env: {
      url: "https://data.bayaccounting.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['data.bayaccounting.co.nz']
    }
  }
}
