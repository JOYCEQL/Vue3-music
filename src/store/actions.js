/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:30:24
 * @LastEditTime: 2021-11-27 14:50:19
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

export function removeSong ({ commit, state }, song) {
  const sequenceList = state.sequenceList.slice()
  const playList = state.playList.slice()

  const sequenceIndex = findIndex(sequenceList, song)
  const playIndex = findIndex(playList, song)
  if (sequenceIndex < 0 || playIndex < 0) {
    return
  }

  sequenceList.splice(sequenceIndex, 1)
  playList.splice(playIndex, 1)

  let currentIndex = state.currentIndex
  if (playIndex < currentIndex || currentIndex === playList.length) {
    currentIndex--
  }

  commit('setSequenceList', sequenceList)
  commit('setPlayList', playList)
  commit('setCurrentIndex', currentIndex)
  if (!playList.length) {
    commit('setPlayingState', false)
  }
}

function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}
/**
 * @description 清空歌曲列表
 * @export
 * @param {*} { commit }
 */
export function clearSongList ({ commit }) {
  commit('setSequenceList', [])
  commit('setPlayList', [])
  commit('setCurrentIndex', 0)
  commit('setPlayingState', false)
}

/**
 * @description 搜索时添加歌曲
 * @export
 * @param {*} { commit, state }
 * @param {*} song
 */
export function addSong ({ commit, state }, song) {
  // slice深拷贝
  const playList = state.playList.slice()
  const sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex

  // 判断点击的歌曲是不是已经在播放列表里
  const playIndex = findIndex(playList, song)
  if (playIndex > -1) {
    currentIndex = playIndex
  } else {
    // 添加到最后，索引变为最后一个
    playList.push(song)
    currentIndex = playList.length - 1
  }
  const sequenceIndex = findIndex(sequenceList, song)
  if (sequenceIndex === -1) {
    //  歌曲不在歌曲列表里
    sequenceList.push(song)
  }

  commit('setSequenceList', sequenceList)
  commit('setPlayList', playList)
  commit('setCurrentIndex', currentIndex)
  commit('setPlayingState', true)
  commit('setFullScreen', true)
}
