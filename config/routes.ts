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
    name: 'dashboard',
    icon: 'LineChart',
    component: './Dashboard',
  },
  {
    name: 'workflows',
    icon: 'ShareAlt',
    path: '/workflows',
    component: './WorkflowList',
  },
  {
    path: '/workflow/:uid/dag',
    name: 'dag',
    component: './WorkflowDag',
    hideInMenu: true,
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
        component: './UserList',
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
        component: './StageList',
      },
      {
        path: '/logs/jobs',
        name: 'jobs',
        component: './JobList',
      },
      {
        path: '/logs/audit',
        name: 'audit',
        component: './EventList',
      },
      {
        path: '/logs/workers',
        name: 'workers',
        component: './WorkerList',
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
        path: '/admin/code',
        name: 'code',
        component: './CodeList',
      },
      {
        path: '/admin/variables',
        name: 'variables',
        component: './VariableList',
      },
      {
        path: '/admin/connections',
        name: 'connections',
        component: './ConnectionList',
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
