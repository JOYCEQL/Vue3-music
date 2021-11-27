<!--
 * @Author: yuguangzhou
 * @Date: 2021-06-20 11:57:46
 * @LastEditTime: 2021-11-27 15:01:23
 * @LastEditors: yuguangzhou
 * @Description:搜索
-->
<template>
  <div class="search">
      <div class="search-input-wrapper">
          <search-input v-model="query"></search-input>
      </div>
      <scroll
        ref="scrollRef"
        class="search-content"
        v-show="!query"
      >
        <div>
          <div class="hot-keys">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li
                class="item"
                v-for="item in hotKeys"
                :key="item.id"
                @click="addKey(item.key)"
              >
                <span>{{item.key}}</span>
              </li>
            </ul>
          </div>
        </div>
      </scroll>
      <div class="search-result" v-show="query">
          <suggest
            :query="query"
            @select-song="selectSong"
            @select-singer="selectSinger"
          ></suggest>
      </div>
      <router-view v-slot="{ Component }">
        <transition appear name="slide">
          <component :is="Component" :data="selectedSinger" />
        </transition>
      </router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getHotKeys } from '@/api/search'

import Scroll from '@/components/wrap-scroll/index'

import SearchInput from '@/components/base/SearchInput'
import Suggest from '@/components/search/Suggest'

export default {
  name: 'Search',
  components: {
    SearchInput,
    Scroll,
    Suggest
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const query = ref('')
    const hotKeys = ref([])
    const selectedSinger = ref(null)

    onMounted(async () => {
      const res = await getHotKeys()
      hotKeys.value = res.hotKeys
    })

    const addKey = (val) => {
      query.value = val
    }
    const selectSong = (song) => {
      store.dispatch('addSong', song)
    }
    const selectSinger = (singer) => {
      console.log(singer)
      selectedSinger.value = singer
      router.push(
        `/search/${singer.mid}`
      )
    }
    return {
      query,
      hotKeys,
      addKey,
      selectSong,
      selectSinger,
      selectedSinger

    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    position: fixed;
    width: 100%;
    top: 44px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    .search-input-wrapper {
      margin: 20px;
    }
    .search-content {
      flex: 1;
      overflow: hidden;
      .hot-keys {
        margin: 4px 20px 20px 20px;
        .title {
          margin-bottom: 20px;
          font-size: $font-size-medium;
          color: $color-text-l;
        }
        .item {
          display: inline-block;
          padding: 5px 10px;
          margin: 0 20px 10px 0;
          border-radius: 6px;
          background: $color-highlight-background;
          font-size: $font-size-medium;
          color: $color-text-d;
        }
      }
      .search-history {
        position: relative;
        margin: 0 20px;
        .title {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: $font-size-medium;
          color: $color-text-l;
          .text {
            flex: 1;
          }
          .clear {
            @include extend-click();
            .icon-clear {
              font-size: $font-size-medium;
              color: $color-text-d;
            }
          }
        }
      }
    }
    .search-result {
      flex: 1;
      overflow: hidden;
    }
  }
</style>
