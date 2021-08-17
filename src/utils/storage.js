/*
 * @Author: yuguangzhou
 * @Date: 2021-08-04 15:38:07
 * @LastEditTime: 2021-08-17 15:28:07
 * @LastEditors: yuguangzhou
 * @Description: 封装存储方法
 */

export const setStorage = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
export const getStorage = (key) => {
  const data = sessionStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
