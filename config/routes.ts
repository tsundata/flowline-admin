﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'dashboard',
    icon: 'LineChart',
    component: './Dashboard',
  },
  {
    name: 'workflows',
    icon: 'ShareAlt',
    path: '/workflows',
    component: './TableList',
  },
  {
    path: '/security',
    name: 'security',
    icon: 'SecurityScan',
    access: 'canAdmin',
    routes: [
      {
        path: '/security/users',
        name: 'users',
        component: './TableList',
      },
      {
        path: '/security/roles',
        name: 'roles',
        component: './TableList',
      },
      {
        path: '/security/user-statistics',
        name: 'user-statistics',
        component: './TableList',
      },
      {
        path: '/security/actions',
        name: 'actions',
        component: './TableList',
      },
      {
        path: '/security/resources',
        name: 'resources',
        component: './TableList',
      },
      {
        path: '/security/permissions',
        name: 'permissions',
        component: './TableList',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/logs',
    name: 'logs',
    icon: 'file',
    access: 'canAdmin',
    routes: [
      {
        path: '/logs/runs',
        name: 'runs',
        component: './TableList',
      },
      {
        path: '/logs/jobs',
        name: 'jobs',
        component: './TableList',
      },
      {
        path: '/logs/audit',
        name: 'audit',
        component: './TableList',
      },
      {
        path: '/logs/workers',
        name: 'workers',
        component: './TableList',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'user',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/variables',
        name: 'variables',
        component: './TableList',
      },
      {
        path: '/admin/connections',
        name: 'connections',
        component: './TableList',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
