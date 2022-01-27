/*
 * @Author: yuguangzhou
 * @Date: 2021-06-20 14:54:19
 * @LastEditTime: 2022-01-05 14:14:08
 * @LastEditors: yuguangzhou
 * @Description: vant 插件引入
 */
import { Swipe, SwipeItem, List, Tabbar, TabbarItem } from 'vant'
export function Vant (app) {
  app.use(List)
  app.use(Swipe)
  app.use(SwipeItem)
  app.use(Tabbar)
  app.use(TabbarItem)
}
