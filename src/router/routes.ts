import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: () => ({name:'chat'})
  },
  {
  path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      // { path: 'register', name: 'register', meta: { guestOnly: true }, component: () => import('pages/RegisterPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/channel',
      component: () => import('layouts/MainLayout.vue'),
      children: [
        {path: ':name', component: () => import('pages/MainLayout.vue')},
        {path: '', name: 'chat', component: () => import('layouts/MainLayout.vue')}
      ],
    },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
