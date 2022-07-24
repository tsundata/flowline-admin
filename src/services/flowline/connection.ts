// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create connection resource POST /api/apps/v1/connection */
export async function connectionCreate(body: API.Connection, options?: { [key: string]: any }) {
  return request<API.Connection>('/api/apps/v1/connection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get connection resource GET /api/apps/v1/connection/${param0} */
export async function connectionGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.connectionGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Connection>(`/api/apps/v1/connection/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update connection resource PUT /api/apps/v1/connection/${param0} */
export async function connectionUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.connectionUpdateParams,
  body: API.Connection,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Connection>(`/api/apps/v1/connection/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete connection resource DELETE /api/apps/v1/connection/${param0} */
export async function connectionDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.connectionDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Connection>(`/api/apps/v1/connection/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Watch connection resource GET /api/apps/v1/connection/${param0}/watch */
export async function connectionWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.connectionWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/connection/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List connection resource GET /api/apps/v1/connection/list */
export async function connectionList(options?: { [key: string]: any }) {
  return request<API.ConnectionList>('/api/apps/v1/connection/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List connection resource GET /api/apps/v1/connection/watch */
export async function connectionWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/connection/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
