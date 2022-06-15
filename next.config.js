const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "https://bayaccounting.co.nz",
        SITE_URL: "http://localhost:3000"
      },
      reactStrictMode: true,
      images: {
        domains: ['bayaccounting.co.nz']
      }
    }
  }
  return {
    env: {
      url: "https://bayaccounting.co.nz",
      SITE_URL: "https://bayaccounting.co.nz"
    },
    reactStrictMode: true,
    images: {
      domains: ['bayaccounting.co.nz']
    }
  }
}
