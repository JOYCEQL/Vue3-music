/*
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-11-16 21:08:58
 * @LastEditors: yuguangzhou
 * @Description: 路由文件
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/recommend'/* webpackChunkName: "recommend" */)
const Album = () => import('@/views/album'/* webpackChunkName: "recommend" */)
const Singer = () => import('@/views/singer'/* webpackChunkName: "singer" */)
const TopList = () => import('@/views/top-list'/* webpackChunkName: "top-list" */)
const TopDetail = () => import('@/views/top-detail'/* webpackChunkName: "top-list" */)
const Search = () => import('@/views/search'/* webpackChunkName: "search" */)
const SingerDetail = () => import('@/views/singer-detail'/* webpackChunkName: "singer-detail" */)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: Album,
        meta: {
          showFoot: false
        }
      }
    ]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail,
        meta: {
          showFoot: false
        }
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: TopDetail,
        meta: {
          showFoot: false
        }
      }
    ]
  },
  {
    path: '/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
