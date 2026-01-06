<template>
  <div class="tabs-wrapper">
    <a-tabs v-model:activeKey="activeKey" type="editable-card" hide-add @change="handleChange" @edit="handleEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.fullPath" :tab="pane.title" :closable="pane.closable"> </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// 标签页数据
const activeKey = ref('');
const panes = ref([]);

// 添加标签页
const addTab = (routeInfo) => {
  console.log(routeInfo);
  const routePath = routeInfo.path;
  const fullPath = routeInfo.fullPath;
  const routeTitle = routeInfo.meta.title || routeInfo.name || routePath;

  // 检查是否已存在标签页
  const existingTab = panes.value.find((pane) => pane.fullPath === fullPath);
  if (!existingTab) {
    panes.value.push({
      title: routeTitle,
      path: routePath,
      query: routeInfo.query,
      name: routeInfo.name,
      fullPath: routeInfo.fullPath,
      closable: panes.value.length > 0, // 至少保留一个标签页
    });
  }
  console.log('panes.value', panes.value);

  activeKey.value = fullPath;
};

// 移除标签页
const removeTab = (targetKey) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.fullPath === targetKey) {
      lastIndex = i - 1;
    }
  });

  const tabIndex = panes.value.findIndex((pane) => pane.fullPath === targetKey);
  if (tabIndex !== -1) {
    // 获取要移除的组件实例，如果需要的话
    const removedTab = panes.value[tabIndex];

    panes.value.splice(tabIndex, 1);
  }

  // 如果关闭的是当前激活的标签页，跳转到上一个标签页
  if (targetKey === activeKey.value) {
    const lastPane = panes.value[lastIndex];
    if (lastIndex >= 0 && lastPane) {
      activeKey.value = lastPane.fullPath;
      router.replace({ path: lastPane.path, query: lastPane.query });
    } else if (panes.value.length > 0) {
      const firstab = panes.value[0];
      activeKey.value = firstab.fullPath;
      router.replace({ path: firstab.path, query: firstab.query });
    } else {
      // 如果没有标签页了，跳转到首页
      router.replace('/');
    }
  } else if (panes.value.length > 0) {
    // 仅更新路由，不跳转
    router.replace(activeKey.value);
  }
  console.log('panes.value', panes.value);
};

// 标签页切换
const handleChange = (key) => {
  // 检查是否已存在标签页
  const tab = panes.value.find((pane) => pane.fullPath === key);
  router.replace({ path: tab.path, query: tab.query });
};

// 编辑标签页（关闭）
const handleEdit = (targetKey, action) => {
  if (action === 'remove') {
    removeTab(targetKey);
  }
};

// 监听路由变化，添加新标签页
watch(
  () => route.fullPath, // 监听完整路径变化
  (newPath) => {
    addTab(route);
  },
);

// 组件挂载时初始化第一个标签页
onMounted(() => {
  if (panes.value.length === 0) {
    panes.value.push({
      title: 'home',
      path: route.path,
      name: route.name,
      fullPath: route.fullPath,
      qeury: route.query,
      closable: false, // 首页不可关闭
    });
    activeKey.value = route.path;
  }
});
</script>

<style scoped>
.tabs-wrapper {
  padding: 10px 20px 0;
}
</style>
