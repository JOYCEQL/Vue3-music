/*
 * @Author: yuguangzhou
 * @Date: 2021-08-28 13:26:16
 * @LastEditTime: 2021-08-29 14:51:56
 * @LastEditors: yuguangzhou
 * @Description: 歌词
 */

import { useStore } from 'vuex'
import { watch, computed, ref } from 'vue'
import { getLyric } from '../api/song'
import Lyric from 'lyric-parser'
export default function useLyric ({ songReady, currentTime }) {
  // 创建Lyric实例
  const currentLyric = ref(null)
  const currentLineNum = ref(0)
  const lyricScrollRef = ref(null)
  const lyricListRef = ref(null)
  const playingLyric = ref('')
  const pureMusicLyric = ref('')
  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)
  watch(currentSong, async (newSong) => {
    if (!newSong.url || !newSong.id) {
      //  无效资源
      return
    }
    // 清除异步ready方法的影响
    stopLyric()
    currentLyric.value = null
    currentLineNum.value = 0
    pureMusicLyric.value = ''
    playingLyric.value = ''

    const lyric = await getLyric(newSong)
    store.commit('addSongLyric', {
      song: newSong,
      lyric
    })

    // 处理异步问题
    if (currentSong.value.lyric !== lyric) {
      return
    }

    currentLyric.value = new Lyric(lyric, handleLyric)
    const hasLyric = currentLyric.value.lines.length
    if (hasLyric) {
      if (songReady.value) {
        playLyric()
      }
    } else {
      playingLyric.value = pureMusicLyric.value = lyric.replace(/\[(\d{2}):(\d{2}):(\d{2})\]/g, '')
    }
  })

  // 处理歌词
  const handleLyric = ({ lineNum, txt }) => {
    currentLineNum.value = lineNum
    playingLyric.value = txt
    const scrollComp = lyricScrollRef.value
    const listEl = lyricListRef.value
    if (!listEl) {
      return
    }
    if (lineNum > 5) {
      const lineEl = listEl.children[lineNum - 5]
      scrollComp.scroll.scrollToElement(lineEl, 1000)
    } else {
      scrollComp.scroll.scrollTo(0, 0, 1000)
    }
  }
  // 播放歌词
  const playLyric = () => {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.seek(currentTime.value * 1000)
    }
  }
  // 暂停歌词
  const stopLyric = () => {
    const currentLyricVal = currentLyric.value
    if (currentLyricVal) {
      currentLyricVal.stop()
    }
  }
  return {
    currentLineNum,
    currentLyric,
    playLyric,
    stopLyric,
    lyricListRef,
    lyricScrollRef,
    pureMusicLyric,
    playingLyric
  }
}
