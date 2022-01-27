/*
 * @Author: yuguangzhou
 * @Date: 2021-06-10 21:37:44
 * @LastEditTime: 2022-01-06 19:01:39
 * @LastEditors: yuguangzhou
 * @Description: webpack配置
 */
const registerRouter = require('./backend/router')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : './',
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";`
      }
    }
  },
  devServer: {
    before (app) {
      registerRouter(app)
    }
  },
  productionSourceMap: false
}
