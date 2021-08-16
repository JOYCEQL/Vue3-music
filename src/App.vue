<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-08-13 14:53:01
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <Header></Header>
  <!-- <tab></tab> -->
  <router-view>
  </router-view>
  <!-- 播放器 -->
  <tab-bar></tab-bar>
  <player></player>
</template>
<script>
import { reactive } from 'vue'
import Header from '@/components/header/Header'
// import Tab from '@/components/tab/Tab'
import Player from '@/components/player/Player'
import TabBar from '@/components/base/TabBar'
export default {
  components: {
    Header,
    // Tab,
    Player,
    TabBar
  },
  setup () {
    const data = reactive({

    })
    return {
      data
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
