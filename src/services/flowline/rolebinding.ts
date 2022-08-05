// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create rolebinding resource POST /api/apps/v1/rolebinding */
export async function rolebindingCreate(body: API.RoleBinding, options?: { [key: string]: any }) {
  return request<API.RoleBinding>('/api/apps/v1/rolebinding', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get rolebinding resource GET /api/apps/v1/rolebinding/${param0} */
export async function rolebindingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rolebindingGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.RoleBinding>(`/api/apps/v1/rolebinding/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update rolebinding resource PUT /api/apps/v1/rolebinding/${param0} */
export async function rolebindingUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rolebindingUpdateParams,
  body: API.RoleBinding,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.RoleBinding>(`/api/apps/v1/rolebinding/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete rolebinding resource DELETE /api/apps/v1/rolebinding/${param0} */
export async function rolebindingDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rolebindingDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.RoleBinding>(`/api/apps/v1/rolebinding/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch rolebinding resource PATCH /api/apps/v1/rolebinding/${param0} */
export async function rolebindingPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rolebindingPatchParams,
  body: API.RoleBinding,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.RoleBinding>(`/api/apps/v1/rolebinding/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch rolebinding resource GET /api/apps/v1/rolebinding/${param0}/watch */
export async function rolebindingWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.rolebindingWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/rolebinding/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List rolebinding resource GET /api/apps/v1/rolebinding/list */
export async function rolebindingList(options?: { [key: string]: any }) {
  return request<API.RoleBindingList>('/api/apps/v1/rolebinding/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List rolebinding resource GET /api/apps/v1/rolebinding/watch */
export async function rolebindingWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/rolebinding/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
