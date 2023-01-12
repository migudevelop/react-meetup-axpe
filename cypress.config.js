const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    viewportWidth: 1000,
    viewportHeight: 600
  }
})
