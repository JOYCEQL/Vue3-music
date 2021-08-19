/*
 * @Author: yuguangzhou
 * @Date: 2021-07-03 19:14:02
 * @LastEditTime: 2021-08-18 10:10:20
 * @LastEditors: yuguangzhou
 * @Description: 收藏喜爱名单
 */

import { useStore } from 'vuex'
import { FAVORITE_KEY } from '@/assets/js/constant'
import { remove, save } from '@/utils/array-oper'
import { computed } from 'vue'
export default function useFavorite () {
  const store = useStore()
  const favoriteList = computed(() => store.state.favoriteList)

  const getFavoriteStatus = (song) => {
    return !!isFavorite(song)
  }
  const handleFavorite = (song) => {
    let list
    if (isFavorite(song)) {
      list = remove(FAVORITE_KEY, compare)
    } else {
      list = save(song, FAVORITE_KEY, compare)
    }
    store.commit('setFavoriteList', list)
    function compare (item) {
      return item.id === song.id
    }
  }
  const isFavorite = (song) => {
    // findIndex返回的是下标索引
    return favoriteList.value.findIndex((item) => {
      return item.id === song.id
    }) > -1
  }
  return {
    handleFavorite,
    getFavoriteStatus
  }
}
