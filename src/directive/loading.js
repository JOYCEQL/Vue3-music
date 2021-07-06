/*
 * @Author: yuguangzhou
 * @Date: 2021-06-26 10:47:53
 * @LastEditTime: 2021-06-28 21:58:17
 * @LastEditors: yuguangzhou
 * @Description: 全局loading指令
 */
// 创建vue实例
import { createApp } from 'vue'
import Loading from '@/components/base/Loading'

const loadingDirective = {
  mounted (el, binding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    // 挂载到el,后续使用
    el.instance = instance
    const title = binding.arg
    if (typeof title !== 'undefined') {
      instance.setTitle(title)
    }
    if (binding.value) {
      append(el)
    }
  },
  updated (el, binding) {
    // binding的值发生变化时添加或者移除dom
    if (binding.value !== binding.oldValue) {
      binding.value ? append(el) : remove(el)
    }
  }
}
const append = (el) => {
  el.appendChild(el.instance.$el)
}

const remove = (el) => {
  el.removeChild(el.instance.$el)
}

export default loadingDirective
