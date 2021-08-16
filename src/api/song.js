/*
 * @Author: yuguangzhou
 * @Date: 2021-07-20 14:11:50
 * @LastEditTime: 2021-07-20 14:12:22
 * @LastEditors: yuguangzhou
 * @Description:歌曲api文件
 */
import { get } from '@/utils/http'
export function processSongs (songs) {
  if (!songs.length) {
    return Promise.resolve(songs)
  }

  return get('/api/getSongsUrl', {
    mid: songs.map((song) => {
      return song.mid
    })
  }).then((result) => {
    const map = result.map
    return songs.map((song) => {
      song.url = map[song.mid]
      return song
    }).filter((song) => {
      return song.url && song.url.indexOf('vkey') > -1
    })
  })
}
