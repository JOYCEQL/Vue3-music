/*
 * @Author: yuguangzhou
 * @Date: 2021-09-06 14:26:51
 * @LastEditTime: 2021-11-20 13:09:55
 * @LastEditors: yuguangzhou
 * @Description:排行榜
 */
import { get } from '@/utils/http'

export function getTopList () {
  return get('/api/getTopList')
}

/**
 * @description 获取详情
 * @param {*} top
 */
export function getTopDetail (top) {
  return get('/api/getTopDetail', {
    id: top.id,
    period: top.period
  })
}
