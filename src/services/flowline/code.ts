// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create code resource POST /api/apps/v1/code */
export async function codeCreate(body: API.Code, options?: { [key: string]: any }) {
  return request<API.Code>('/api/apps/v1/code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get code resource GET /api/apps/v1/code/${param0} */
export async function codeGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.codeGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Code>(`/api/apps/v1/code/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update code resource PUT /api/apps/v1/code/${param0} */
export async function codeUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.codeUpdateParams,
  body: API.Code,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Code>(`/api/apps/v1/code/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete code resource DELETE /api/apps/v1/code/${param0} */
export async function codeDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.codeDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Code>(`/api/apps/v1/code/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch code resource PATCH /api/apps/v1/code/${param0} */
export async function codePatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.codePatchParams,
  body: API.Code,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Code>(`/api/apps/v1/code/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch code resource GET /api/apps/v1/code/${param0}/watch */
export async function codeWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.codeWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/code/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List code resource GET /api/apps/v1/code/list */
export async function codeList(options?: { [key: string]: any }) {
  return request<API.CodeList>('/api/apps/v1/code/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List code resource GET /api/apps/v1/code/watch */
export async function codeWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/code/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
