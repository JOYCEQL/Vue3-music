<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-20 11:36:28
 * @LastEditTime: 2021-06-20 11:41:54
 * @LastEditors: yuguangzhou
 * @Description: 公共tab栏
-->
<template>
  <div class="tab">
    <router-link
    class="tab-item"
    v-for="tab in tabs"
    :key="tab.path"
    :to="tab.path"
    >
    <span class="tab-link">
      {{tab.name}}
    </span>
    </router-link>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: '',
  components: {},
  setup () {
    const data = reactive({
      tabs: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/top-list'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    })
    return {
      ...data
    }
  }
}
</script>

<style lang="scss" scoped>
 .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;

    .tab-item {
      flex: 1;
      text-align: center;

      .tab-link {
        padding-bottom: 5px;
        color: $color-text-l;
      }

      &.router-link-active {
        .tab-link {
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>
