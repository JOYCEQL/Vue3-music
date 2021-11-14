/*
 * @Author: yuguangzhou
 * @Date: 2021-11-14 18:44:26
 * @LastEditTime: 2021-11-14 19:02:03
 * @LastEditors: yuguangzhou
 * @Description: Scroll高阶组件
 */
import { h, mergeProps, withCtx, renderSlot, ref, computed, watch, nextTick } from 'vue'
import Scroll from '@/components/base/Scroll'
import { useStore } from 'vuex'

export default {
  name: 'wrap-scroll',
  props: Scroll.props,
  emits: Scroll.emits,
  render (ctx) {
    return h(Scroll, mergeProps({
      ref: 'scrollRef'
    }, ctx.$props, {
      onScroll: (e) => {
        ctx.$emit('scroll', e)
      }
    }), {
      default: withCtx(() => {
        return [renderSlot(ctx.$slots, 'default')]
      })
    })
  },
  setup () {
    const scrollRef = ref(null)
    const scroll = computed(() => {
      return scrollRef.value.scroll
    })

    const store = useStore()
    const playList = computed(() => store.state.playList)

    watch(playList, async () => {
      await nextTick()
      scroll.value.refresh()
    })

    return {
      scrollRef,
      scroll
    }
  }
}
