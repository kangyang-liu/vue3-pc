import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../page/home/index.vue'),
      meta: {
        title: 'home',
        keepAlive: true,
      },
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('../page/demo1/index.vue'),
      meta: {
        title: 'demo1',
        keepAlive: true,
      },
    },
     {
      path: '/demo2',
      name: 'demo2',
      component: () => import('../page/demo2/index.vue'),
      meta: {
        title: 'demo2',
        keepAlive: true,
      },
    },
  ],
})

export default router
