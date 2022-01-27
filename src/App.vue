<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2022-01-06 15:29:59
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <Header></Header>
  <!-- <tab></tab> -->
  <router-view :style="viewStyle">
  </router-view >
  <!-- 播放器 -->
  <tab-bar v-if="$route.meta.showFoot!==false"></tab-bar>
  <player></player>
</template>
<script>
import Header from '@/components/header/Header'

// import Tab from '@/components/tab/Tab'
import Player from '@/components/player/Player'
import TabBar from '@/components/base/TabBar'
import { mapState } from 'vuex'
import config from '@/config'
import { setThemes } from '@/utils/set-theme'
export default {
  components: {
    Header,
    // Tab,
    Player,
    TabBar
  },
  computed: {
    // 设置视图距离底部的位置,展示播放器110px，默认情况60px
    viewStyle () {
      const bottom = this.playList.length ? '110px' : '60px'
      return {
        bottom
      }
    },
    ...mapState([
      'playList'
    ])
  },
  data () {
    return {
      currentThemes: 'darkThemes'
    }
  },
  created () {
    setThemes(config, this.currentThemes)
  },
  watch: {
    $route (to, from) {
      console.log(to.path)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
