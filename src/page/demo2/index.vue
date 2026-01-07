<template>
  <div>demo2</div>
  <input v-model="count" type="text" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance, defineOptions } from 'vue';

// defineOptions({
//   name: 'demo1',
// });
const count = ref(888);

console.log('组件实例', getCurrentInstance());
</script>
