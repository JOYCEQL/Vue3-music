/*
 * @Author: yuguangzhou
 * @Date: 2021-09-06 14:26:51
 * @LastEditTime: 2021-10-12 10:31:26
 * @LastEditors: yuguangzhou
 * @Description:排行榜
 */
import { get } from '@/utils/http'

export function getTopList () {
  return get('/api/getTopList')
}

export function getTopDetail (top) {
  return get('/api/getTopDetail', {
    id: top.id,
    period: top.period
  })
}
