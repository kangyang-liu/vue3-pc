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
import { useKeepAliveRouteNameStore } from '@/stores/keepAliveRoute';

const keepAliveRouteNameStore = useKeepAliveRouteNameStore();

const router = useRouter();
const route = useRoute();

// 标签页数据
const activeKey = ref('');
const panes = ref([]);

// 添加标签页
const addTab = (routeInfo) => {
  const routePath = routeInfo.path;
  const fullPath = routeInfo.fullPath;
  const routeTitle = routeInfo?.meta?.title || routeInfo.name || routePath;

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

    keepAliveRouteNameStore.addComponentsName(routeInfo.name);
  }

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
  const tabInstall = panes.value.find((pane) => pane.fullPath === targetKey);
  if (tabIndex !== -1) {
    panes.value.splice(tabIndex, 1);
    keepAliveRouteNameStore.removeComponentsName(tabInstall.name);
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
    const params = {
      title: 'home',
      path: route.path,
      name: route.name || 'home',
      fullPath: route.fullPath || route.path,
      qeury: route.query || {},
      closable: false, // 首页不可关闭
    };
    addTab(params);
    activeKey.value = route.path;
  }
});
</script>

<style scoped lang="less">
.tabs-wrapper {
  height: 100%;
  background: transparent;

  :deep(.ant-tabs) {
    height: 100%;

    &.ant-tabs-card {
      &.ant-tabs-top > .ant-tabs-nav::before {
        display: none;
      }
    }

    .ant-tabs-nav {
      margin: 0;
      padding: 8px 12px;
      background: transparent;

      .ant-tabs-nav-wrap {
        gap: 8px;
      }

      .ant-tabs-tab {
        margin: 0;
        padding: 8px 20px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.03);
        border: none;
        transition: all 0.2s ease;
        font-size: 14px;
        font-weight: 500;
        color: #64748b;

        &:hover {
          background: rgba(0, 0, 0, 0.06);
          color: #475569;
        }

        &.ant-tabs-tab-active {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          color: #1e293b;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

          .ant-tabs-tab-btn {
            color: #1e293b;
          }
        }

        .ant-tabs-tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
        }
      }

      .ant-tabs-extra-content {
        display: none;
      }
    }

    .ant-tabs-content-holder {
      display: none;
    }
  }
}
</style>
