// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** Create workflow resource POST /api/apps/v1/workflow */
export async function workflowCreate(body: API.Workflow, options?: { [key: string]: any }) {
  return request<API.Workflow>('/api/apps/v1/workflow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get workflow resource GET /api/apps/v1/workflow/${param0} */
export async function workflowGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowGetParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Workflow>(`/api/apps/v1/workflow/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Update workflow resource PUT /api/apps/v1/workflow/${param0} */
export async function workflowUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowUpdateParams,
  body: API.Workflow,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Workflow>(`/api/apps/v1/workflow/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Delete workflow resource DELETE /api/apps/v1/workflow/${param0} */
export async function workflowDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowDeleteParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Workflow>(`/api/apps/v1/workflow/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** Patch workflow resource PATCH /api/apps/v1/workflow/${param0} */
export async function workflowPatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowPatchParams,
  body: API.Workflow,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Workflow>(`/api/apps/v1/workflow/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Get workflow resource to dag subresource GET /api/apps/v1/workflow/${param0}/dag */
export async function workflowGetDag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowGetDagParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Dag>(`/api/apps/v1/workflow/${param0}/dag`, {
    method: 'GET',
    params: {
      ...queryParams,
    },
    ...(options || {}),
  });
}

/** Update workflow resource to dag PUT /api/apps/v1/workflow/${param0}/dag */
export async function workflowUpdateDag(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowUpdateDagParams,
  body: API.Dag,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Status>(`/api/apps/v1/workflow/${param0}/dag`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Update workflow resource to state PUT /api/apps/v1/workflow/${param0}/state */
export async function workflowUpdateState(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowUpdateStateParams,
  body: API.Workflow,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<API.Workflow>(`/api/apps/v1/workflow/${param0}/state`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** Watch workflow resource GET /api/apps/v1/workflow/${param0}/watch */
export async function workflowWatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.workflowWatchParams,
  options?: { [key: string]: any },
) {
  const { uid: param0, ...queryParams } = params;
  return request<any>(`/api/apps/v1/workflow/${param0}/watch`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** List workflow resource GET /api/apps/v1/workflow/list */
export async function workflowList(options?: { [key: string]: any }) {
  return request<API.WorkflowList>('/api/apps/v1/workflow/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Watch List workflow resource GET /api/apps/v1/workflow/watch */
export async function workflowWatchList(options?: { [key: string]: any }) {
  return request<any>('/api/apps/v1/workflow/watch', {
    method: 'GET',
    ...(options || {}),
  });
}
