const pages = require('./config/pages.config')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  pages,
  productionSourceMap: false, // 生产环境禁用sourcemap
  devServer: {
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       rom: /^\/$/,
    //       to (context) {

    //       },
    //     }
    //   ],
    // },
    proxy: 'http://116.196.89.224',
    before (app) {
      // console.dir(app)
      // next()
    },
  },
  // chainWebpack: config => {
  // },
  // configureWebpack: config => {

  // }
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/assets/css/variable.scss";',
      },
    },
  },
}
