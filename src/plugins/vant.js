/*
 * @Author: yuguangzhou
 * @Date: 2021-06-20 14:54:19
 * @LastEditTime: 2021-06-22 21:25:15
 * @LastEditors: yuguangzhou
 * @Description: vant 插件引入
 */
import { createApp } from 'vue'
import
{
  Swipe,
  SwipeItem,
  List
}
  from 'vant'
const app = createApp()
app.use(List)
app.use(Swipe)
app.use(SwipeItem)
