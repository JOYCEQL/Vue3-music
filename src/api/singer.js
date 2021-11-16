/*
 * @Author: yuguangzhou
 * @Date: 2021-07-03 11:24:39
 * @LastEditTime: 2021-11-16 20:52:47
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
    mid: singer.mid
  })
}
