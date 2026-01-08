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
          <KeepAlive v-if="route.meta?.keepAlive" :include="keepAliveRouteNameStore.count">
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

  .layout-sider {
    background-color: #fff;
  }
  .layout-header {
    background-color: #fff;
    padding: unset;
    height: unset;
  }
}
</style>
