/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:30:24
 * @LastEditTime: 2021-08-12 15:40:47
 * @LastEditors: yuguangzhou
 * @Description: 提交mutation
 */
import { PLAY_MODE } from '@/assets/js/constant'
import { shuffle } from '@/assets/js/util'

export function selectPlay ({ commit }, { list, index }) {
  commit('setPlayMode', PLAY_MODE.sequence)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', list)
  commit('setCurrentIndex', index)
}

export function randomPlay ({ commit }, list) {
  commit('setPlayMode', PLAY_MODE.random)
  commit('setSequenceList', list)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
  commit('setPlayList', shuffle(list))
  commit('setCurrentIndex', 0)
}

// 播放模式改变列表操作
export function changeMode ({ commit, getters, state }, mode) {
  // 处理当前播放的歌曲-根据id找到索引
  const currentSongId = getters.currentSong.id
  if (mode === PLAY_MODE.random) {
    commit('setPlayList', shuffle(state.sequenceList))
  } else {
    commit('setPlayList', state.sequenceList)
  }
  const currentIndex = state.playList.findIndex((item) => {
    return currentSongId === item.id
  })
  commit('setCurrentIndex', currentIndex)
  commit('setPlayMode', mode)
}
