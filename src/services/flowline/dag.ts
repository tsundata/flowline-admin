// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create dag resource POST /api/apps/v1/dag */
export async function dagCreate(body: API.Dag, options?: { [key: string]: any }) {
  return request<API.Dag>('/api/apps/v1/dag', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get dag resource GET /api/apps/v1/dag/${param0} */
export async function dagGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dagGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Dag>(`/api/apps/v1/dag/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update dag resource PUT /api/apps/v1/dag/${param0} */
export async function dagUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dagUpdateParams,
  body: API.Dag,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Dag>(`/api/apps/v1/dag/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete dag resource DELETE /api/apps/v1/dag/${param0} */
export async function dagDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dagDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Dag>(`/api/apps/v1/dag/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Watch dag resource GET /api/apps/v1/dag/${param0}/watch */
export async function dagWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.dagWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/dag/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List dag resource GET /api/apps/v1/dag/list */
export async function dagList(options?: { [key: string]: any }) {
  return request<API.DagList>('/api/apps/v1/dag/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List dag resource GET /api/apps/v1/dag/watch */
export async function dagWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/dag/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
