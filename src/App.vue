<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-09 21:35:41
 * @LastEditTime: 2021-06-20 16:01:21
 * @LastEditors: yuguangzhou
 * @Description:
-->
<template>
  <Header></Header>
  <tab></tab>
  <router-view  v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>
<script>
import { reactive } from 'vue'
import Header from '@/components/header/Header'
import Tab from '@/components/tab/Tab'
export default {
  components: { Header, Tab },
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
