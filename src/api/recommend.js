/*
 * @Author: yuguangzhou
 * @Date: 2021-06-20 17:42:00
 * @LastEditTime: 2021-11-16 20:54:02
 * @LastEditors: yuguangzhou
 * @Description: 推荐接口
 */
import { get } from '@/utils/http'

export function getRecommend () {
  return get('/api/getRecommend')
}

/**
 * @description
 * @export
 * @param {*} album
 * @return {*}
 */
export function getAlbum (album) {
  return get('/api/getAlbum', {
    id: album.id
  })
}
