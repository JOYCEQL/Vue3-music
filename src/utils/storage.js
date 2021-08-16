/*
 * @Author: yuguangzhou
 * @Date: 2021-08-04 15:38:07
 * @LastEditTime: 2021-08-04 16:21:01
 * @LastEditors: yuguangzhou
 * @Description: 封装存储方法
 */

export const setSessionstorgae = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
export const getSessionstorgae = (key) => {
  return JSON.parse(sessionStorage.getItem(key))
}
