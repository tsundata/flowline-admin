// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create job resource POST /api/apps/v1/job */
export async function jobCreate(body: API.Job, options?: { [key: string]: any }) {
  return request<API.Job>('/api/apps/v1/job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get job resource GET /api/apps/v1/job/${param0} */
export async function jobGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.jobGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Job>(`/api/apps/v1/job/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update job resource PUT /api/apps/v1/job/${param0} */
export async function jobUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.jobUpdateParams,
  body: API.Job,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Job>(`/api/apps/v1/job/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete job resource DELETE /api/apps/v1/job/${param0} */
export async function jobDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.jobDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Job>(`/api/apps/v1/job/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update job resource to state PUT /api/apps/v1/job/${param0}/state */
export async function jobUpdateState(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.jobUpdateStateParams,
  body: API.Job,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Job>(`/api/apps/v1/job/${param0}/state`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch job resource GET /api/apps/v1/job/${param0}/watch */
export async function jobWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.jobWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/job/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List job resource GET /api/apps/v1/job/list */
export async function jobList(options?: { [key: string]: any }) {
  return request<API.JobList>('/api/apps/v1/job/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List job resource GET /api/apps/v1/job/watch */
export async function jobWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/job/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
