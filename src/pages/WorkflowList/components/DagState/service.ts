/* eslint-disable @typescript-eslint/no-unused-vars */
import { DND_RENDER_ID, NODE_HEIGHT, NODE_WIDTH } from '@/components/Dag/constant';
import { workflowGetDag } from '@/services/flowline/workflow';
import type { NsGraph, NsGraphCmd } from '@antv/xflow';
import { NsGraphStatusCommand } from '@antv/xflow';
/** 后端接口调用 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace DagApi {
  export const NODE_COMMON_PROPS = {
    renderKey: DND_RENDER_ID,
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
  } as const;

  /** 查图的meta元信息 */
  export const queryGraphMeta: NsGraphCmd.GraphMeta.IArgs['graphMetaService'] = async (args) => {
    // @ts-ignore
    return { ...args, flowId: args.meta.flowId };
  };
  /** 加载图数据的api */
  export const loadGraphData = async (meta: NsGraph.IGraphMeta) => {
    console.log(meta.meta.jobUID);
    return await workflowGetDag({ uid: meta.flowId, jobUID: meta.meta.jobUID });
  };

  let runningNodeId = 0;
  const statusMap = {} as NsGraphStatusCommand.IStatusInfo['statusMap'];
  let graphStatus: NsGraphStatusCommand.StatusEnum = NsGraphStatusCommand.StatusEnum.DEFAULT;
  export const graphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] = async () => {
    if (runningNodeId < 4) {
      statusMap[`node${runningNodeId}`] = { status: NsGraphStatusCommand.StatusEnum.SUCCESS };
      statusMap[`node${runningNodeId + 1}`] = {
        status: NsGraphStatusCommand.StatusEnum.PROCESSING,
      };
      runningNodeId += 1;
      graphStatus = NsGraphStatusCommand.StatusEnum.PROCESSING;
    } else {
      runningNodeId = 0;
      statusMap.node4 = { status: NsGraphStatusCommand.StatusEnum.SUCCESS };
      graphStatus = NsGraphStatusCommand.StatusEnum.SUCCESS;
    }
    return {
      graphStatus: graphStatus,
      statusMap: statusMap,
    };
  };
  export const stopGraphStatusService: NsGraphStatusCommand.IArgs['graphStatusService'] =
    async () => {
      Object.entries(statusMap).forEach(([, val]) => {
        const { status } = val as { status: NsGraphStatusCommand.StatusEnum };
        if (status === NsGraphStatusCommand.StatusEnum.PROCESSING) {
          val.status = NsGraphStatusCommand.StatusEnum.ERROR;
        }
      });
      return {
        graphStatus: NsGraphStatusCommand.StatusEnum.ERROR,
        statusMap: statusMap,
      };
    };
}
