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
    label: 'home',
    title: 'home',
    path: '/',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'demo1',
    title: 'demo1',
    path: '/demo1',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'demo2',
    title: 'demo2',
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
          {
            key: '19',
            label: 'Option 19',
            title: 'Option 19',
          },
          {
            key: '20',
            label: 'Option 20',
            title: 'Option 20',
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
  const { item } = data;
  if (item.path && item.path !== '/') {
    router.replace({ path: item.path, query: { plan: 'private' } });
  } else {
    router.replace({ path: '/' });
  }
};
</script>

<style lang="less" scoped>
.menu-box {
  height: 100%;
  padding: 16px 0;
  overflow: auto;
}

:deep(.ant-menu) {
  background: transparent;
  border: none;
  color: #94a3b8;

  &.ant-menu-inline {
    padding: 0 8px;
  }

  .ant-menu-item {
    margin: 4px 8px !important;
    border-radius: 8px;
    color: #94a3b8;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #f1f5f9;
    }

    &.ant-menu-item-selected {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }
  }

  .ant-menu-submenu {
    .ant-menu-submenu-title {
      margin: 4px 8px !important;
      border-radius: 8px;
      color: #94a3b8;
      transition: all 0.2s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        color: #f1f5f9;
      }
    }
  }

  .ant-menu-sub {
    background: rgba(255, 255, 255, 0.02) !important;
    border-radius: 8px;
    margin: 4px 8px !important;
    padding: 4px 0;

    .ant-menu-item {
      padding-left: 48px !important;

      &.ant-menu-item-selected {
        background: rgba(59, 130, 246, 0.2);
        color: #60a5fa;
      }
    }
  }

  .ant-menu-item-icon {
    color: inherit;
    font-size: 16px;
  }
}
</style>
