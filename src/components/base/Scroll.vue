<!--
 * @Author: yuguangzhou
 * @Date: 2021-07-02 09:23:50
 * @LastEditTime: 2021-07-04 14:02:45
 * @LastEditors: yuguangzhou
 * @Description: 列表滚动组件
-->
<template>
  <div class="scroll" ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
import useScroll from '@/hooks/use-scroll'
import { ref } from 'vue'
export default {
  name: 'scroll',
  props: {
    click: {
      type: Boolean,
      default: true
    },
    probeType: {
      type: Number,
      default: 0
    }
  },
  emits: ['scroll'],
  setup (props, { emit }) {
    const rootRef = ref(null)
    const scroll = useScroll(rootRef, props, emit)
    return {
      rootRef,
      scroll
    }
  }
}
</script>

<style scoped lang="less">

</style>
