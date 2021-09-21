<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-16 21:37:32
 * @LastEditTime: 2021-09-21 15:06:26
 * @LastEditors: yuguangzhou
 * @Description: 公共头部
-->
<template>
   <div class="header">
    <span class="icon"></span>
    <!-- <h1 class="text">山水之间</h1> -->
    <!-- <router-link class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link> -->
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Header',
  components: {},
  setup () {
    const data = reactive({

    })
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    .icon {
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 48px;
      height: 33px;
      margin-right: 9px;
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
