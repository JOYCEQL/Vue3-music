/*
 * @Author: yuguangzhou
 * @Date: 2021-07-03 11:24:39
 * @LastEditTime: 2021-07-03 11:27:16
 * @LastEditors: yuguangzhou
 * @Description: 歌手tab页请求
 */

import { get } from '@/utils/http'

// 获取歌手列表
export function getSingerList () {
  return get('/api/getSingerList')
}
