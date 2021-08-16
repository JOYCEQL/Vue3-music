<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-20 11:57:07
 * @LastEditTime: 2021-08-13 14:55:27
 * @LastEditors: yuguangzhou
 * @Description:推荐
-->
<template>
  <div class="recommend" v-loading:[loadingText]="loading">
    <scroll class="recommend-content">
        <div>
        <van-swipe
        class="recommend-swipe"
        :autoplay="3000"
        indicator-color="white"
        lazy-render
      >
        <van-swipe-item v-for="image in images" :key="image.id">
          <img style="width: 100%" :src="image.pic" />
        </van-swipe-item>
      </van-swipe>
      <div class="recommend-list"  ref="list">
        <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
        <ul>
          <li v-for="item in albums" class="item" :key="item.id">
            <div class="icon">
              <img width="60" height="60"  :src="item.pic" />
            </div>
            <div class="text">
              <h2 class="name">
                {{ item.username }}
              </h2>
              <p class="title">
                {{ item.title }}
              </p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/base/Scroll'
import { reactive, onMounted, toRefs, computed } from 'vue'
import { getRecommend } from '@/api/recommend'
export default {
  name: '',
  components: {
    Scroll
  },
  setup () {
    const data = reactive({
      images: [],
      albums: [],
      loadingText: '正在加载,请稍等',
      listLoading: false
    })
    const loading = computed(() => {
      return !data.images.length && !data.albums.length
    })
    onMounted(async () => {
      const res = await getRecommend()
      data.images = res.sliders
      data.albums = res.albums
    })
    return {
      loading,
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.recommend{
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 0;
}
.recommend-content{
  height: 100%;
  overflow: hidden;
}
.recommend-list {
  .list-title {
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: $font-size-medium;
    color: $color-theme;
  }
  .item {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px 20px 20px;

    .icon {
      flex: 0 0 60px;
      width: 60px;
      padding-right: 20px;
      img{
        border-radius: 8px;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      font-size: $font-size-medium;
    }
    .name {
      margin-bottom: 10px;
      color: $color-text;
    }
    .title {
      color: $color-text-d;
    }
  }
}
</style>
