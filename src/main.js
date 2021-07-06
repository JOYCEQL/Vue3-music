/*
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-06-26 11:16:57
 * @LastEditors: yuguangzhou
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式文件
import '@/assets/scss/index.scss'
// 引入vant
// import '@/plugins/vant'
import loadingDirective from '@/directive/loading'
import { Swipe, SwipeItem, List } from 'vant'
const app = createApp(App)
app.use(Swipe)
app.use(SwipeItem)
app.use(List)
app.directive('loading', loadingDirective)
app.use(store).use(router).mount('#app')
