/*
 * @Author: yuguangzhou
 * @Date: 2021-08-24 21:20:09
 * @LastEditTime: 2021-08-24 22:08:26
 * @LastEditors: yuguangzhou
 * @Description:播放器CD逻辑
 */

import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
export default function useCd () {
  const store = useStore()
  const playing = computed(() => store.state.playing)
  const cdRef = ref(null)
  const cdImageRef = ref(null)

  const cdClass = computed(() => {
    return playing.value ? 'playing' : ''
  })

  // 外层div同步内层图片的角度-暂停的时候同步
  watch(playing, (newPlaying) => {
    if (!newPlaying) {
      syncTransform(cdRef.value, cdImageRef.value)
    }
  })
  const syncTransform = (wrapper, inner) => {
    const innerTransform = getComputedStyle(inner).transform
    const wrapperTransform = getComputedStyle(wrapper).transform
    wrapper.style.transform = wrapperTransform === 'none' ? innerTransform : innerTransform.concat(' ', wrapperTransform)
  }

  return {
    cdClass,
    cdRef,
    cdImageRef
  }
}
