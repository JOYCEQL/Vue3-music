/*
 * @Author: yuguangzhou
 * @Date: 2021-11-24 21:06:16
 * @LastEditTime: 2021-11-24 21:07:48
 * @LastEditors: yuguangzhou
 * @Description: 搜索模块api文件
 */
import { get } from '@/utils/http'

/**
 * @description 获取热门搜索key
 * @return {*}
 */
export function getHotKeys () {
  return get('/api/getHotKeys')
}

export function search (query, page, showSinger) {
  return get('/api/search', {
    query,
    page,
    showSinger
  })
}
