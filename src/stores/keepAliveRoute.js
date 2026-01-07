import { defineStore } from 'pinia'
import {  ref, watch } from 'vue'

export const useKeepAliveRouteNameStore = defineStore('keepAliveRouteName', () => {
  const count = ref([])
  function addComponentsName(value) {
   count.value.push(value)
  }
  function removeComponentsName(value) {
    count.value = count.value.filter(item => item !== value)
  }
  watch(count, () => {
    console.log('缓存页面', count.value)
  })

  return { count, addComponentsName, removeComponentsName }
})
