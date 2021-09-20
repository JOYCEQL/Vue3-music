/*
 * @Author: yuguangzhou
 * @Date: 2021-09-14 14:04:04
 * @LastEditTime: 2021-09-20 11:54:03
 * @LastEditors: yuguangzhou
 * @Description:滑动切换前后曲目
 */

export default function useChange (handleNext, handlePrev) {
  const touch = {}

  const onTouchStart = (e) => {
    touch.startX = e.touches[0].pageX
  }
  const onTouchMove = (e) => {
    const deltaX = e.touches[0].pageX - touch.startX
    const offsetWidth = Math.min(0, Math.max(-window.innerWidth, deltaX))
    touch.percent = Math.abs(offsetWidth / window.innerWidth)
    // 根据占比判断是左滑还是右滑
    if (touch.percent < 0.8 && deltaX > 0) {
      handlePrev()
    }
    if (touch.percent > 0.2 && deltaX < 0) {
      handleNext()
    }
  }
  const onTouchEnd = (e) => {

  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}
