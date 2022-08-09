/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NsDeployDagCmd } from '@/components/Dag/cmd-extensions/cmd-deploy';
import type { NsRenameNodeCmd } from '@/components/Dag/cmd-extensions/cmd-rename-node-modal';
import { DND_RENDER_ID, NODE_HEIGHT, NODE_WIDTH } from '@/components/Dag/constant';
import { workflowGetDag, workflowUpdateDag } from '@/services/flowline/workflow';
import type { NsEdgeCmd, NsGraphCmd, NsNodeCmd } from '@antv/xflow';
import { NsGraph, NsGraphStatusCommand, uuidv4 } from '@antv/xflow';
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
    return await workflowGetDag({ uid: meta.flowId });
  };
  /** 保存图数据的api */
  export const saveGraphData: NsGraphCmd.SaveGraphData.IArgs['saveGraphDataService'] = async (
    meta: NsGraph.IGraphMeta,
    graphData: NsGraph.IGraphData,
  ) => {
    const result = await workflowUpdateDag(
      { uid: meta.flowId },
      {
        // @ts-ignore
        nodes: graphData.nodes,
        // @ts-ignore
        edges: graphData.edges,
        kind: 'dag',
        apiVersion: 'v1',
      },
    );

    return {
      success: result.status,
      data: graphData,
    };
  };
  /** 部署图数据的api */
  export const deployDagService: NsDeployDagCmd.IDeployDagService = async (
    meta: NsGraph.IGraphMeta,
    graphData: NsGraph.IGraphData,
  ) => {
    return {
      success: true,
      data: graphData,
    };
  };

  /** 添加节点api */
  export const addNode: NsNodeCmd.AddNode.IArgs['createNodeService'] = async (
    args: NsNodeCmd.AddNode.IArgs,
  ) => {
    console.info('addNode service running, add node:', args);
    const portItems = [
      {
        type: NsGraph.AnchorType.INPUT,
        group: NsGraph.AnchorGroup.TOP,
        tooltip: '输入桩',
      },
      {
        type: NsGraph.AnchorType.OUTPUT,
        group: NsGraph.AnchorGroup.BOTTOM,
        tooltip: '输出桩',
      },
    ] as NsGraph.INodeAnchor[];

    const { id, ports = portItems, groupChildren } = args.nodeConfig;
    const nodeId = id || uuidv4();
    /** 这里添加连线桩 */
    const node: NsNodeCmd.AddNode.IArgs['nodeConfig'] = {
      ...NODE_COMMON_PROPS,
      ...args.nodeConfig,
      id: nodeId,
      ports: (ports as NsGraph.INodeAnchor[]).map((port) => {
        return { ...port, id: uuidv4() };
      }),
    };
    /** group没有链接桩 */
    if (groupChildren && groupChildren.length) {
      node.ports = [];
    }
    return node;
  };

  /** 更新节点 name，可能依赖接口判断是否重名，返回空字符串时，不更新 */
  export const renameNode: NsRenameNodeCmd.IUpdateNodeNameService = async (
    name,
    node,
    graphMeta,
  ) => {
    return { err: null, nodeName: name };
  };

  /** 删除节点的api */
  export const delNode: NsNodeCmd.DelNode.IArgs['deleteNodeService'] = async (args) => {
    console.info('delNode service running, del node:', args.nodeConfig.id);
    return true;
  };

  /** 添加边的api */
  export const addEdge: NsEdgeCmd.AddEdge.IArgs['createEdgeService'] = async (args) => {
    console.info('addEdge service running, add edge:', args);
    const { edgeConfig } = args;
    return {
      ...edgeConfig,
      id: uuidv4(),
    };
  };

  /** 删除边的api */
  export const delEdge: NsEdgeCmd.DelEdge.IArgs['deleteEdgeService'] = async (args) => {
    console.info('delEdge service running, del edge:', args);
    return true;
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
