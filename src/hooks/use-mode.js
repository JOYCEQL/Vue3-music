/*
 * @Author: yuguangzhou
 * @Date: 2021-08-12 15:08:45
 * @LastEditTime: 2021-08-12 15:49:44
 * @LastEditors: yuguangzhou
 * @Description:切换播放模式
 */
import { useStore } from 'vuex'
import { PLAY_MODE } from '@/assets/js/constant'
import { computed } from 'vue'
export default function useMode () {
  const store = useStore()
  const playMode = computed(() => store.state.playMode)
  const modeIcon = computed(() => {
    const playModeVal = playMode.value
    return playModeVal === PLAY_MODE.sequence ? 'icon-sequence' : playModeVal === PLAY_MODE.loop ? 'icon-loop' : 'icon-random'
  })

  const handleMode = () => {
    const mode = (playMode.value + 1) % 3
    store.dispatch('changeMode', mode)
    // dispath
  }

  return {
    modeIcon,
    handleMode
  }
}
