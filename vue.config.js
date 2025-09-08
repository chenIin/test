const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        port: 8088,
        proxy: {
            '/api': {
                target: 'http://192.168.1.102:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

})
