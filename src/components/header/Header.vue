<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-16 21:37:32
 * @LastEditTime: 2022-01-06 15:17:32
 * @LastEditors: yuguangzhou
 * @Description: 公共头部
-->
<template>
   <div class="header">
     <div class="theme">
      <sun theme="filled" size="30" fill="#3a5de7" v-if="currentThemes==='themes'" @click="toggleTheme('darkThemes')"/>
        <moon v-else theme="filled" size="30" fill="#3a5de7"  @click="toggleTheme('themes')"/>
     </div>
    <span class="icon"></span>
  </div>
</template>

<script>
import config from '@/config'
import { setThemes } from '@/utils/set-theme'
export default {
  name: 'Header',
  components: {},
  data () {
    return {
      currentThemes: ''
    }
  },
  created () {
    console.log(config)
  },
  methods: {
    toggleTheme (currentTheme) {
      this.currentThemes = currentTheme
      setThemes(config, currentTheme)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 44px;
    color: $color-theme;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .theme{
      margin-left: 10px;
      margin-right: 32vw;
    }
    .icon {
      display: inline-block;
      width: 48px;
      height: 33px;
      @include bg-image('logo');
      background-size: 100%;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
    .mine {
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine {
        display: block;
        padding: 12px;
        font-size: $font-size-large-x;
        color: $color-theme;
      }
    }
  }
</style>
