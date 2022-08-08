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
    <Card
      size="small"
      title="Introduction to Compute Nodes"
      style={{ width: '200px' }}
      bordered={false}
    >
      Welcome：{props.name}
      Here you can perform operations according to the set code
    </Card>
  );
};

export const nodeDataService: NsNodeCollapsePanel.INodeDataService = async (meta, modelService) => {
  console.log(meta, modelService);
  return [
    {
      id: 'data calculation',
      header: 'Data calculation',
      children: [
        {
          id: '2',
          label: 'Compute Node',
          parentId: '1',
          renderKey: DND_RENDER_ID,
          popoverContent: <NodeDescription name="Compute Node" />,
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
