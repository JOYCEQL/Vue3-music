/*
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-08-13 11:03:19
 * @LastEditors: yuguangzhou
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式文件
import '@/assets/scss/index.scss'
import loadingDirective from '@/directive/loading'
// import { Swipe, SwipeItem, List } from 'vant'
import { IconPark } from '@/plugins/iconPark'
// 引入vant
import { Vant } from '@/plugins/vant'
const app = createApp(App)
Vant(app)
IconPark(app)
app.directive('loading', loadingDirective)
app.use(store).use(router).mount('#app')
