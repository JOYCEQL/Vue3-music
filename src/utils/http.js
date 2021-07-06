/*
 * @Author: yuguangzhou
 * @Date: 2021-06-20 17:35:53
 * @LastEditTime: 2021-06-20 17:41:38
 * @LastEditors: yuguangzhou
 * @Description: axios请求封装
 */
import axios from 'axios'
const ERR_OK = 0
const baseURL = process.env.NODE_ENV === 'production' ? 'http://ustbhuangyi.com/music-next/' : '/'

axios.defaults.baseURL = baseURL

export function get (url, params) {
  return axios.get(url, {
    params
  }).then((res) => {
    const serverData = res.data
    if (serverData.code === ERR_OK) {
      return serverData.result
    }
  }).catch((e) => {
    console.log(e)
  })
}
