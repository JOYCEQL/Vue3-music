/*
 * @Author: yuguangzhou
 * @Date: 2021-07-03 19:14:02
 * @LastEditTime: 2021-07-04 14:21:24
 * @LastEditors: yuguangzhou
 * @Description: 固定标题
 */

import { watch, nextTick, ref, computed } from 'vue'
export default function useFixed (props) {
  const TITLE_HEIGHT = 30
  const groupRef = ref(null)
  const scrollY = ref(0)
  const currentIndex = ref(0)
  const listHeights = ref([])
  const distance = ref(0)

  // 计算显示标题
  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })
  // 计算偏移量
  const fixedStyle = computed(() => {
    const distanceVal = distance.value
    const diff = (distanceVal > 0 && distanceVal < TITLE_HEIGHT) ? distanceVal - TITLE_HEIGHT : 0
    return {
      transform: `translate3d(0,${diff}px,0`
    }
  })

  // 监听歌手数组
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })
  // 监听高度的变化,计算落在的区间
  watch(scrollY, (newVal) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newVal >= heightTop && newVal <= heightBottom) {
        currentIndex.value = i
        distance.value = heightBottom - newVal
      }
    }
  })
  function calculate () {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    let height = 0
    // 初始化
    listHeightsVal.length = 0
    listHeightsVal.push(height)

    list.forEach((item) => {
      height += item.clientHeight
      listHeightsVal.push(height)
    })
  }
  // scroll事件获取滚动的高度
  function onScroll (pos) {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle,
    fixedStyle,
    currentIndex
  }
}
