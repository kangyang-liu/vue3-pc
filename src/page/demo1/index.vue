<template>
  <div>demo1</div>
  <input type="text" />
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineOptions } from 'vue';
import { useRoute } from 'vue-router';
const $route = useRoute();

// defineOptions({
//   name: 'demo1',
// });
console.log('Current route name:', $route.name);
</script>
