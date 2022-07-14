export default [
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
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name: 'workflows',
    icon: 'table',
    path: '/workflows',
    component: './TableList',
  },
  {
    path: '/security',
    name: 'security',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/security/users',
        name: 'users',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/security/roles',
        name: 'roles',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/security/user-statistics',
        name: 'user-statistics',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/security/actions',
        name: 'actions',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/security/resources',
        name: 'resources',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/security/permissions',
        name: 'permissions',
        icon: 'smile',
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
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/logs/runs',
        name: 'runs',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/logs/jobs',
        name: 'jobs',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/logs/audit',
        name: 'audit',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/logs/workers',
        name: 'workers',
        icon: 'smile',
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
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/variables',
        name: 'variables',
        icon: 'smile',
        component: './TableList',
      },
      {
        path: '/admin/connections',
        name: 'connections',
        icon: 'smile',
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
