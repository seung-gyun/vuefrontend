const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/seung-gyun/vueproject',
})

module.exports = {
  devServer: {
    proxy: {
      '/api': {	
        target: 'http://localhost:8080', 
        changeOrigin: true,
      }, 
    },
  },
}