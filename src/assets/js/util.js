/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 15:25:52
 * @LastEditTime: 2021-08-08 15:26:19
 * @LastEditors: yuguangzhou
 * @Description: 工具函数
 */

// 随机洗牌
export function shuffle (source) {
  const arr = source.slice()
  for (let i = 0; i < arr.length; i++) {
    const j = getRandomInt(i)
    swap(arr, i, j)
  }
  return arr
}

function getRandomInt (max) {
  return Math.floor(Math.random() * (max + 1))
}

function swap (arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
