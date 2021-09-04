/*
 * @Author: yuguangzhou
 * @Date: 2021-09-02 21:38:15
 * @LastEditTime: 2021-09-02 22:53:43
 * @LastEditors: yuguangzhou
 * @Description: 切换视图
 */
import { ref } from 'vue'
export default function useToggleView () {
  const currentShow = ref('cd')
  const cdStyle = ref(null)
  const lyricStyle = ref(null)

  const touch = {}
  let currentView = 'cd'
  const touchStart = (e) => {
    touch.startX = e.touches[0].pageX
    touch.startY = e.touches[0].pageY
    // 定义方向锁值
    touch.direction = ''
  }
  const touchMove = (e) => {
    const deltaX = e.touches[0].pageX - touch.startX
    const deltaY = e.touches[0].pageY - touch.startY
    const left = currentView === 'cd' ? 0 : -window.innerWidth
    const offsetWidth = left + deltaX
    touch.percent = Math.abs(offsetWidth / window.innerWidth)

    // 准备方向锁
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    if (!touch.direction) {
      touch.direction = absDeltaX >= absDeltaY ? 'horization' : 'vertical'
    }
    // 非水平方向直接return
    if (touch.direction === 'vertical') {
      return
    }
    // 改变当前显示
    if (currentView === 'cd') {
      if (touch.percent > 0.2) {
        currentShow.value = 'lyric'
      } else {
        currentShow.value = 'cd'
      }
    } else {
      if (touch.percent < 0.8) {
        currentShow.value = 'cd'
      } else {
        currentShow.value = 'lyric'
      }
    }

    // 改变样式显示
    cdStyle.value = {
      opacity: 1 - touch.percent
    }
    lyricStyle.value = {
      transform: `translate3d(${offsetWidth}px, 0, 0)`
    }
  }
  const touchEnd = () => {
    let offsetWidth
    let opacity
    if (currentShow.value === 'cd') {
      currentView = 'cd'
      offsetWidth = 0
      opacity = 1
    } else {
      currentView = 'lyric'
      offsetWidth = -window.innerWidth
      opacity = 0
    }
    const duration = 300
    cdStyle.value = {
      opacity,
      transitionDuration: `${duration}ms`
    }
    lyricStyle.value = {
      transform: `translate3d(${offsetWidth}px,0,0)`,
      transitionDuration: `${duration}ms`
    }
  }
  return {
    currentShow,
    cdStyle,
    lyricStyle,
    touchStart,
    touchMove,
    touchEnd
  }
}
