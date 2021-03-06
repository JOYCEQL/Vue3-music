/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:29:02
 * @LastEditTime: 2021-08-17 15:52:39
 * @LastEditors: yuguangzhou
 * @Description:state
 */
import { PLAY_MODE } from '@/assets/js/constant'

const state = {
  sequenceList: [],
  // 切换循序列表
  playList: [],
  // 默认顺序列表
  playMode: PLAY_MODE.sequence,
  playing: false,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: []
}

export default state
