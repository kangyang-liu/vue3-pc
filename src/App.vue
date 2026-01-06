<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Master from '@/components/master/index.vue';
import HearderTab from '@/components/hearderTab/index.vue';

const headerStyle = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#ccc',
};

const contentStyle = {
  textAlign: 'center',
  lineHeight: '120px',

  backgroundColor: '#fff',
};

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fff',
  height: '100%',
  overflow: 'auto',
};

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#ccc',
};
</script>

<template>
  <a-layout>
    <a-layout-sider :style="siderStyle" collapsible>
      <Master />
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="headerStyle">
        <HearderTab />
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <RouterView v-slot="{ Component, route }">
          <transition>
            <KeepAlive v-if="route.meta?.keepAlive">
              <component :is="Component" :key="route.fullPath" />
            </KeepAlive>
            <component v-else :is="Component" :key="route.fullPath" />
          </transition>
        </RouterView>
      </a-layout-content>
      <a-layout-footer :style="footerStyle">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="less">
.ant-layout {
  height: 100%;
}
</style>
