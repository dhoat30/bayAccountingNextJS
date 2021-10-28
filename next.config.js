const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://bayaccounting.co.nz"
      },
      reactStrictMode: true,
      images: {
        domains: ['bayaccounting.co.nz']
      }
    }
  }
  return {
    env: {
      url: "https://bayaccounting.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['bayaccounting.co.nz']
    }
  }
}
