/*
 * @Author: yuguangzhou
 * @Date: 2021-06-10 21:37:44
 * @LastEditTime: 2021-06-20 17:32:42
 * @LastEditors: yuguangzhou
 * @Description: webpack配置
 */
const registerRouter = require('./backend/router')
module.exports = {
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
  }
}
