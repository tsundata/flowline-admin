// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create stage resource POST /api/apps/v1/stage */
export async function stageCreate(body: API.Stage, options?: { [key: string]: any }) {
  return request<API.Stage>('/api/apps/v1/stage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get stage resource GET /api/apps/v1/stage/${param0} */
export async function stageGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Stage>(`/api/apps/v1/stage/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update stage resource PUT /api/apps/v1/stage/${param0} */
export async function stageUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageUpdateParams,
  body: API.Stage,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Stage>(`/api/apps/v1/stage/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete stage resource DELETE /api/apps/v1/stage/${param0} */
export async function stageDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Stage>(`/api/apps/v1/stage/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch stage resource PATCH /api/apps/v1/stage/${param0} */
export async function stagePatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stagePatchParams,
  body: API.Stage,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Stage>(`/api/apps/v1/stage/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Update stage resource to binding PUT /api/apps/v1/stage/${param0}/binding */
export async function stageUpdateBinding(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageUpdateBindingParams,
  body: API.Binding,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Status>(`/api/apps/v1/stage/${param0}/binding`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Update stage resource to list PUT /api/apps/v1/stage/${param0}/list */
export async function stageUpdateList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageUpdateListParams,
  body: API.StageList,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Status>(`/api/apps/v1/stage/${param0}/list`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch stage resource GET /api/apps/v1/stage/${param0}/watch */
export async function stageWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.stageWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/stage/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List stage resource GET /api/apps/v1/stage/list */
export async function stageList(options?: { [key: string]: any }) {
  return request<API.StageList>('/api/apps/v1/stage/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List stage resource GET /api/apps/v1/stage/watch */
export async function stageWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/stage/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
