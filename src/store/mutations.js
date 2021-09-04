/*
 * @Author: yuguangzhou
 * @Date: 2021-08-08 14:29:27
 * @LastEditTime: 2021-08-28 14:06:01
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
  },
  setFavoriteList (state, list) {
    state.favoriteList = list
  },
  addSongLyric (state, { song, lyric }) {
    state.sequenceList.map(item => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  }
}

export default mutations
