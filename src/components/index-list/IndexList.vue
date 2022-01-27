<!--
 * @Author: yuguangzhou
 * @Date: 2021-07-03 11:14:56
 * @LastEditTime: 2022-01-06 14:28:26
 * @LastEditors: yuguangzhou
 * @Description: 索引列表
-->
<template>
  <scroll class="index-list" :probe-type="3" ref="scrollRef"  @scroll="onScroll">
    <ul ref="groupRef">
      <li
        v-for="group in data"
        :key="group.title"
        class="group"
      >
        <h2 class="title">{{group.title}}</h2>
        <ul>
          <li
            v-for="item in group.list"
            :key="item.id"
            class="item"
            @click="onItemClick(item)"
          >
            <img class="avatar" :src="item.pic">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div
      class="fixed"
      v-show="fixedTitle"
      :style="fixedStyle"
    >
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
        <div
      class="shortcut"
      @touchstart.stop.prevent="onShortcutTouchStart"
      @touchmove.stop.prevent="onShortcutTouchMove"
      @touchend.stop.prevent
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="item"
          :data-index="index"
          class="item"
          :class="{'current':currentIndex===index}">
          {{item}}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/wrap-scroll/index'
import useFixed from '@/hooks/use-fixed'
import useShortcut from '@/hooks/use-shortcut'
export default {
  name: 'IndexList',
  components: { Scroll },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ['select'],
  setup (props, { emit }) {
    const { onScroll, fixedTitle, groupRef, fixedStyle, currentIndex } = useFixed(props)
    const { shortcutList, scrollRef, onShortcutTouchStart, onShortcutTouchMove } = useShortcut(props, groupRef)
    const onItemClick = (item) => {
      emit('select', item)
    }
    return {
      onScroll,
      fixedTitle,
      groupRef,
      fixedStyle,
      currentIndex,
      scrollRef,
      shortcutList,
      onShortcutTouchStart,
      onShortcutTouchMove,
      onItemClick
    }
  }
}
</script>

<style lang="scss" scoped>
  .index-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--site-config-color-background);
    .group {
      padding-bottom: 30px;
      .title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: var(--site-config-color-text-l);
        background: var(--site-config-color-highlight-background);
      }
      .item {
        display: flex;
        align-items: center;
        padding: 20px 0 0 30px;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name {
          margin-left: 20px;
          color: var(--site-config-color-text-l);
          font-size: $font-size-medium;
        }
      }
    }
    .fixed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .fixed-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: var(--site-config-color-text-l);
        background: var(--site-config-color-highlight-background);
      }
    }
    .shortcut {
      position: absolute;
      right: 4px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      padding: 20px 0;
      border-radius: 10px;
      text-align: center;
      background: var(--site-config-color-background);
      font-family: Helvetica;
      .item {
        padding: 3px;
        line-height: 1;
        color: var(--site-config-color-text-l);
        font-size: $font-size-small;
        &.current {
          color: var(--site-config-color-theme)
        }
      }
    }
  }
</style>
