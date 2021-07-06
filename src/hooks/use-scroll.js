/*
 * @Author: yuguangzhou
 * @Date: 2021-07-02 10:48:58
 * @LastEditTime: 2021-07-03 22:51:48
 * @LastEditors: yuguangzhou
 * @Description: 滚动
 */
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from 'vue'
BScroll.use(ObserveDOM)
export default function useScroll (wrapperRef, options, emit) {
  // 定义变量接收ref
  const scroll = ref(null)
  onMounted(() => {
    // 初始化
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
    if (options.probeType > 0) {
      // 监听scroll事件
      scroll.value.on('scroll', (pos) => {
        emit('scroll', pos)
      })
    }
  })
  // 销毁实例
  onUnmounted(() => {
    scroll.value.destory()
  })
  return scroll
}
