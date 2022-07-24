// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create role resource POST /api/apps/v1/role */
export async function roleCreate(body: API.Role, options?: { [key: string]: any }) {
  return request<API.Role>('/api/apps/v1/role', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get role resource GET /api/apps/v1/role/${param0} */
export async function roleGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Role>(`/api/apps/v1/role/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update role resource PUT /api/apps/v1/role/${param0} */
export async function roleUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleUpdateParams,
  body: API.Role,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Role>(`/api/apps/v1/role/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete role resource DELETE /api/apps/v1/role/${param0} */
export async function roleDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Role>(`/api/apps/v1/role/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Watch role resource GET /api/apps/v1/role/${param0}/watch */
export async function roleWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/role/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List role resource GET /api/apps/v1/role/list */
export async function roleList(options?: { [key: string]: any }) {
  return request<API.RoleList>('/api/apps/v1/role/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List role resource GET /api/apps/v1/role/watch */
export async function roleWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/role/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
