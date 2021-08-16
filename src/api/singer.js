/*
 * @Author: yuguangzhou
 * @Date: 2021-07-03 11:24:39
 * @LastEditTime: 2021-08-16 09:16:13
 * @LastEditors: yuguangzhou
 * @Description: 歌手tab页请求
 */

import { get } from '@/utils/http'

// 获取歌手列表
export function getSingerList () {
  return get('/api/getSingerList')
}

/**
 *
 *
 * @export
 * @param {*} singer
 * @return {*}
 */
export function getSingerDetail (singer) {
  return get('/api/getSingerDetail', {
    mid: singer
  })
}
