const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {},
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables/_index.scss'),
        path.resolve(__dirname, './src/assets/styles/mixins/_index.scss'),
        path.resolve(__dirname, './src/assets/styles/functions/_index.scss')
      ]
    }
  }
})
