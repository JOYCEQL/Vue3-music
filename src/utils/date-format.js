/*
 * @Author: yuguangzhou
 * @Date: 2021-08-18 10:14:04
 * @LastEditTime: 2021-08-18 10:32:58
 * @LastEditors: yuguangzhou
 * @Description: 时间相关处理
 */
export function formatTime (interval) {
  interval = interval | 0
  const minute = ((interval / 60 | 0) + '').padStart(2, '0')
  const second = (interval % 60 + '').padStart(2, '0')
  return `${minute}:${second}`
}
