/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:30:57
 * @LastEditTime: 2021-08-13 14:26:16
 * @LastEditors: yuguangzhou
 * @Description: vuex - 计算属性
 */

// 当前歌曲
export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
