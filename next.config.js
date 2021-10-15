const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        url: "http://localhost:3000/home"
      },
      reactStrictMode: true,
      images: {
        domains: ['inspiry.co.nz']
      },
      basePath: "/home"
    }
  }
  return {
    env: {
      url: "https://inspiry.co.nz/home"
    },
    reactStrictMode: true,
    images: {
      domains: ['inspiry.co.nz']
    },
    basePath: "/home"
  }
}
