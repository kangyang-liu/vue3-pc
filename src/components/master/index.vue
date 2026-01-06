<template>
  <div class="menu-box">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      :mode="menuMode"
      :items="items"
      @click="getMenu"
    >
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watch, h, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';

const router = useRouter();
const menuMode = ref('inline');

const state = reactive({
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Option 1',
    title: 'Option 1',
    path: '/',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
    title: 'Option 2',
    path: '/demo1',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
    title: 'Option 3',
    path: '/demo2',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
          {
            key: '13',
            label: 'Option 13',
            title: 'Option 13',
          },
          {
            key: '14',
            label: 'Option 14',
            title: 'Option 14',
          },
          {
            key: '15',
            label: 'Option 15',
            title: 'Option 15',
          },
          {
            key: '16',
            label: 'Option 16',
            title: 'Option 16',
          },
          {
            key: '17',
            label: 'Option 17',
            title: 'Option 17',
          },
          {
            key: '18',
            label: 'Option 18',
            title: 'Option 18',
          },
        ],
      },
    ],
  },
]);
watch(
  () => state.openKeys,
  (_val, oldVal) => {
    state.preOpenKeys = oldVal;
  },
);

const getMenu = (data) => {
  console.log(data);
  const { item } = data;
  if (item.path && item.path !== '/') {
    router.push({ path: item.path, query: { plan: 'private' } });
  } else {
    router.push({ path: '/' });
  }
};
</script>
