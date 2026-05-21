<template>
  <a-layout>
    <a-layout-sider collapsible class="layout-sider">
      <Master />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <HearderTab />
      </a-layout-header>
      <a-layout-content>
        <RouterView v-slot="{ Component, route }">
          <KeepAlive v-if="route.meta?.keepAlive" :include="keepAliveRouteNameStore.keepAliveRouteNameList">
            <component :is="Component" :key="route.fullPath" />
          </KeepAlive>
          <component v-else :is="Component" :key="route.fullPath" />
        </RouterView>
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Master from '@/components/master/index.vue';
import HearderTab from '@/components/hearderTab/index.vue';
import { useKeepAliveRouteNameStore } from '@/stores/keepAliveRoute';

const keepAliveRouteNameStore = useKeepAliveRouteNameStore();
</script>

<style lang="less">
.ant-layout {
  height: 100%;
  background-color: #f5f5f5;

  .layout-sider {
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    border-right: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.15);
  }

  .layout-header {
    background: #ffffff;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 100;
  }

  .layout-content {
    padding: 20px;
    overflow: auto;
  }
}
</style>
