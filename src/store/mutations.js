/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:29:27
 * @LastEditTime: 2021-08-12 11:28:59
 * @LastEditors: yuguangzhou
 * @Description:
 */
const mutations = {
  setPlayingState (state, playing) {
    state.playing = playing
  },
  setSequenceList (state, list) {
    state.sequenceList = list
  },
  setPlayList (state, list) {
    state.playList = list
  },
  setPlayMode (state, mode) {
    state.playMode = mode
  },
  setCurrentIndex (state, index) {
    state.currentIndex = index
  },
  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  }
}

export default mutations
