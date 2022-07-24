// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create user resource POST /api/apps/v1/user */
export async function userCreate(body: API.User, options?: { [key: string]: any }) {
  return request<API.User>('/api/apps/v1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get user resource GET /api/apps/v1/user/${param0} */
export async function userGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.User>(`/api/apps/v1/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update user resource PUT /api/apps/v1/user/${param0} */
export async function userUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userUpdateParams,
  body: API.User,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.User>(`/api/apps/v1/user/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete user resource DELETE /api/apps/v1/user/${param0} */
export async function userDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.User>(`/api/apps/v1/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Watch user resource GET /api/apps/v1/user/${param0}/watch */
export async function userWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/user/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List user resource GET /api/apps/v1/user/list */
export async function userList(options?: { [key: string]: any }) {
  return request<API.UserList>('/api/apps/v1/user/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List user resource GET /api/apps/v1/user/watch */
export async function userWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/user/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
