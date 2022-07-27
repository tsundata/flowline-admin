/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NsNodeCmd, NsNodeCollapsePanel } from '@antv/xflow';
import { uuidv4, XFlowNodeCommands } from '@antv/xflow';
import { Card } from 'antd';
import { DND_RENDER_ID } from './constant';

export const onNodeDrop: NsNodeCollapsePanel.IOnNodeDrop = async (node, commands, modelService) => {
  const args: NsNodeCmd.AddNode.IArgs = {
    nodeConfig: { ...node, id: uuidv4() },
  };
  console.log('onNodeDrop', args);
  commands.executeCommand(XFlowNodeCommands.ADD_NODE.id, args);
};

const NodeDescription = (props: { name: string }) => {
  return (
    <Card size="small" title="计算节点介绍" style={{ width: '200px' }} bordered={false}>
      欢迎使用：{props.name}
      这里可以根据设置的代码进行运算
    </Card>
  );
};

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (meta, modelService) => {
  console.log(meta, modelService);
  return [
    {
      id: '数据计算',
      header: '数据计算',
      children: [
        {
          id: '2',
          label: '计算节点',
          parentId: '1',
          renderKey: DND_RENDER_ID,
          popoverContent: <NodeDescription name="计算节点" />,
        },
      ],
    },
  ];
};

export const searchService: NsNodeCollapsePanel.ISearchService = async (
  nodes: NsNodeCollapsePanel.IPanelNode[] = [],
  keyword: string,
) => {
  // @ts-ignore
  return nodes.filter((node) => node.label.includes(keyword));
};
