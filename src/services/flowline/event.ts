// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create event resource POST /api/apps/v1/event */
export async function eventCreate(body: API.Event, options?: { [key: string]: any }) {
  return request<API.Event>('/api/apps/v1/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get event resource GET /api/apps/v1/event/${param0} */
export async function eventGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Event>(`/api/apps/v1/event/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update event resource PUT /api/apps/v1/event/${param0} */
export async function eventUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventUpdateParams,
  body: API.Event,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Event>(`/api/apps/v1/event/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete event resource DELETE /api/apps/v1/event/${param0} */
export async function eventDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Event>(`/api/apps/v1/event/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch event resource PATCH /api/apps/v1/event/${param0} */
export async function eventPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventPatchParams,
  body: API.Event,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Event>(`/api/apps/v1/event/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch event resource GET /api/apps/v1/event/${param0}/watch */
export async function eventWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/event/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List event resource GET /api/apps/v1/event/list */
export async function eventList(options?: { [key: string]: any }) {
  return request<API.EventList>('/api/apps/v1/event/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** List event resource to kind subresource GET /api/apps/v1/event/list/kind */
export async function eventListKind(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.eventListKindParams,
  options?: { [key: string]: any },
) {
  return request<API.EventList>('/api/apps/v1/event/list/kind', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Watch List event resource GET /api/apps/v1/event/watch */
export async function eventWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/event/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
