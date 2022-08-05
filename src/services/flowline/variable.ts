// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create variable resource POST /api/apps/v1/variable */
export async function variableCreate(body: API.Variable, options?: { [key: string]: any }) {
  return request<API.Variable>('/api/apps/v1/variable', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get variable resource GET /api/apps/v1/variable/${param0} */
export async function variableGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.variableGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Variable>(`/api/apps/v1/variable/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update variable resource PUT /api/apps/v1/variable/${param0} */
export async function variableUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.variableUpdateParams,
  body: API.Variable,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Variable>(`/api/apps/v1/variable/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete variable resource DELETE /api/apps/v1/variable/${param0} */
export async function variableDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.variableDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Variable>(`/api/apps/v1/variable/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch variable resource PATCH /api/apps/v1/variable/${param0} */
export async function variablePatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.variablePatchParams,
  body: API.Variable,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Variable>(`/api/apps/v1/variable/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch variable resource GET /api/apps/v1/variable/${param0}/watch */
export async function variableWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.variableWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/variable/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List variable resource GET /api/apps/v1/variable/list */
export async function variableList(options?: { [key: string]: any }) {
  return request<API.VariableList>('/api/apps/v1/variable/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List variable resource GET /api/apps/v1/variable/watch */
export async function variableWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/variable/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
