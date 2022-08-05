// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create worker resource POST /api/apps/v1/worker */
export async function workerCreate(body: API.Worker, options?: { [key: string]: any }) {
  return request<API.Worker>('/api/apps/v1/worker', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get worker resource GET /api/apps/v1/worker/${param0} */
export async function workerGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Worker>(`/api/apps/v1/worker/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update worker resource PUT /api/apps/v1/worker/${param0} */
export async function workerUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerUpdateParams,
  body: API.Worker,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Worker>(`/api/apps/v1/worker/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete worker resource DELETE /api/apps/v1/worker/${param0} */
export async function workerDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Worker>(`/api/apps/v1/worker/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch worker resource PATCH /api/apps/v1/worker/${param0} */
export async function workerPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerPatchParams,
  body: API.Worker,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Worker>(`/api/apps/v1/worker/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Update worker resource to heartbeat PUT /api/apps/v1/worker/${param0}/heartbeat */
export async function workerUpdateHeartbeat(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerUpdateHeartbeatParams,
  body: API.Worker,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Status>(`/api/apps/v1/worker/${param0}/heartbeat`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch worker resource GET /api/apps/v1/worker/${param0}/watch */
export async function workerWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workerWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/worker/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List worker resource GET /api/apps/v1/worker/list */
export async function workerList(options?: { [key: string]: any }) {
  return request<API.WorkerList>('/api/apps/v1/worker/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Create worker resource to register subresource POST /api/apps/v1/worker/register */
export async function workerCreateRegister(body: API.Worker, options?: { [key: string]: any }) {
  return request<API.Worker>('/api/apps/v1/worker/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Watch List worker resource GET /api/apps/v1/worker/watch */
export async function workerWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/worker/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
