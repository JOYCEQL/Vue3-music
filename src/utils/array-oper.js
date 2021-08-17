/*
 * @Author: yuguangzhou
 * @Date: 2021-08-17 14:05:14
 * @LastEditTime: 2021-08-17 15:58:01
 * @LastEditors: yuguangzhou
//  * @Description: 数组操作相关方法
 */
import { setStorage, getStorage } from '@/utils/storage'

// 添加
const insertArr = (arr, item, compare) => {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(item)
}

// 删除
const deleteArr = (list, compare) => {
  const index = list.findIndex(compare)
  if (index > -1) {
    list.splice(index, 1)
  }
}
// 收藏歌曲
export function save (item, key, compare) {
  const list = getStorage(key)
  insertArr(list, item, compare)
  setStorage(key, list)
  return list
}

// 删除歌曲
export function remove (key, compare) {
  const list = getStorage(key)
  deleteArr(list, compare)
  setStorage(key, list)
  return list
}
