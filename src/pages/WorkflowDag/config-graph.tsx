import { DND_RENDER_ID, GROUP_NODE_RENDER_ID } from '@/components/Dag/constant';
import { AlgoNode } from '@/components/Dag/react-node/algo-node';
import { GroupNode } from '@/components/Dag/react-node/group';
import type { Graph, Node as X6Node } from '@antv/x6';
import { ObjectExt } from '@antv/x6';
import type { NsNodeCmd } from '@antv/xflow';
import {
  createHookConfig,
  DisposableCollection,
  NsGraph,
  uuidv4,
  XFlowNodeCommands,
} from '@antv/xflow';
import type { IProps } from './index';

function createInputPort(portMeta: any) {
  return {
    id: uuidv4(),
    type: NsGraph.AnchorType.INPUT,
    group: NsGraph.AnchorGroup.TOP,
    tooltip: '输入桩',
    ...portMeta,
  };
}

export const useGraphHookConfig = createHookConfig<IProps>((config) => {
  config.setRegisterHook((hooks) => {
    const disposableList = [
      // 注册增加 react Node Render
      hooks.reactNodeRender.registerHook({
        name: 'add react node',
        handler: async (renderMap) => {
          renderMap.set(DND_RENDER_ID, AlgoNode);
          renderMap.set(GROUP_NODE_RENDER_ID, GroupNode);
        },
      }),
      // 注册修改graphOptions配置的钩子
      hooks.graphOptions.registerHook({
        name: 'custom-x6-options',
        after: 'dag-extension-x6-options',
        handler: async (options) => {
          options.grid = false;
          options.keyboard = {
            enabled: true,
          };
          const graphOptions: Graph.Options = {
            connecting: {
              // 显示可用的链接桩
              validateConnection({ sourceView, targetView, sourceMagnet, targetMagnet }) {
                // 不允许连接到自己
                if (sourceView === targetView) {
                  return false;
                }
                // 只能从上游节点的输出链接桩创建连接
                if (sourceMagnet?.getAttribute('port-group') === NsGraph.AnchorGroup.TOP) {
                  return false;
                }
                // 只能连接到下游节点的输入桩
                if (targetMagnet?.getAttribute('port-group') !== NsGraph.AnchorGroup.TOP) {
                  return false;
                }
                // 没有起点的返回false
                if (!sourceMagnet) {
                  return false;
                }
                if (!targetMagnet) {
                  return false;
                }
                const node = targetView!.cell as any;
                // 判断目标链接桩是否可连接
                const portId = targetMagnet.getAttribute('port')!;
                const port = node.getPort(portId);
                return !!port;
              },
            },
          };
          options.connecting = { ...options.connecting, ...graphOptions.connecting };
        },
      }),
      // 注册增加 graph event
      hooks.x6Events.registerHook({
        name: 'add',
        handler: async (events) => {
          events.push(
            /**
             *  after edge connected to target node, targetNode moved
             * */
            {
              eventName: 'node:moved',
              callback: (e, cmds) => {
                const { node } = e;
                cmds.executeCommand<NsNodeCmd.MoveNode.IArgs>(XFlowNodeCommands.MOVE_NODE.id, {
                  id: node.id,
                  position: node.getPosition(),
                });
              },
            } as NsGraph.IEvent<'node:moved'>,
            /**
             *  after edge connected to target node, targetNode need add a new port
             * */
            {
              eventName: 'edge:added',
              callback: (e, cmds) => {
                const node = e.edge.getTargetNode() as any as X6Node;
                const isCommand = ObjectExt.getByPath(e, 'options.isCommand', '.');
                const isRenderGraph = ObjectExt.getByPath(e, 'options.isRenderGraph', '.');
                if (!isCommand || isRenderGraph) {
                  return;
                }
                if (node) {
                  cmds.executeCommand<NsNodeCmd.UpdateNodePort.IArgs>(
                    XFlowNodeCommands.UPDATE_NODE_PORT.id,
                    {
                      node: node,
                      updatePorts: async (ports) => {
                        return [...ports, createInputPort({})];
                      },
                    },
                  );
                }
              },
            } as NsGraph.IEvent<'edge:added'>,
            /**
             * after edge removed targetNode need remove the connected
             */
            {
              eventName: 'edge:removed',
              callback: (e, cmds) => {
                const nodeId = e.edge.getTargetCellId();
                const portId = e.edge.getTargetPortId();
                const isCommand = ObjectExt.getByPath(e, 'options.isCommand', '.');
                const isRenderGraph = ObjectExt.getByPath(e, 'options.isRenderGraph', '.');
                if (!isCommand || isRenderGraph) {
                  return;
                }
                cmds.executeCommand<NsNodeCmd.UpdateNodePort.IArgs>(
                  XFlowNodeCommands.UPDATE_NODE_PORT.id,
                  {
                    node: nodeId,
                    updatePorts: async (ports) => {
                      // 移除联线对应的port
                      const nextPorts = ports.filter((p) => p.id !== portId);
                      // 过滤出输入桩
                      const inputPorts = nextPorts.filter(
                        (p) => p.type === NsGraph.AnchorType.INPUT,
                      );
                      // 兜底逻辑，每个节点至少有一个输入桩
                      if (inputPorts.length === 0) {
                        nextPorts.push(createInputPort({}));
                      }
                      return nextPorts;
                    },
                  },
                );
              },
            } as NsGraph.IEvent<'edge:removed'>,
          );
        },
      }),
    ];
    const toDispose = new DisposableCollection();
    toDispose.pushAll(disposableList);
    return toDispose;
  });
});
