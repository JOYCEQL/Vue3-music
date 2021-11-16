/*
 * @Author: yuguangzhou
 * @Date: 2021-11-16 20:26:29
 * @LastEditTime: 2021-11-16 20:48:51
 * @LastEditors: yuguangzhou
 * @Description: 栏目/歌手详情页封装
 */
import MusicList from '@/components/music-list/MusicList'
import { getStorage } from '@/utils/storage'
import { processSongs } from '@/api/song'

export default function createDetailComponent (name, key, fetch) {
  return {
    name,
    components: { MusicList },
    props: {
      data: Object
    },
    data () {
      return {
        songs: [],
        loading: true
      }
    },
    computed: {
      computedData () {
        let ret = null
        const data = this.data
        if (data) {
          ret = data
        } else {
          const cached = getStorage(key)
          if (cached && (cached.mid || cached.id + '') === this.$route.params.id) {
            ret = cached
          }
        }
        return ret
      },
      pic () {
        const data = this.computedData
        return data && data.pic
      },
      title () {
        const data = this.computedData
        return data && (data.name || data.title)
      }
    },
    async created () {
      const data = this.computedData
      if (!data) {
        const path = this.$route.matched[0].path
        this.$router.push({
          path
        })
        return
      }
      const result = await fetch(data)
      console.log(result, 1111)
      this.songs = await processSongs(result.songs)
      console.log(this.songs)
      this.loading = false
    }
  }
}
