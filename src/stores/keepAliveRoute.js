import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useKeepAliveRouteNameStore = defineStore('keepAliveRouteName', () => {
  const keepAliveRouteNameList = ref([])

  function addComponentsName(value) {
    // 添加去重检查
    if (!keepAliveRouteNameList.value.includes(value)) {
      keepAliveRouteNameList.value.push(value)
    }
  }

  function removeComponentsName(value) {
    keepAliveRouteNameList.value = keepAliveRouteNameList.value.filter(item => item !== value)
  }

  // 清空所有缓存
  function clearAllComponentsName() {
    keepAliveRouteNameList.value = []
  }

  watch(keepAliveRouteNameList, () => {
    console.log('缓存页面', keepAliveRouteNameList.value)
  })

  return { keepAliveRouteNameList, addComponentsName, removeComponentsName, clearAllComponentsName }
})
