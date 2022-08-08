import {
  CloudSyncOutlined,
  GatewayOutlined,
  GroupOutlined,
  PlaySquareOutlined,
  SaveOutlined,
  StopOutlined,
  UngroupOutlined,
} from '@ant-design/icons';
import type { IModelService, IToolbarItemOptions } from '@antv/xflow';
import {
  createToolbarConfig,
  IconStore,
  MODELS,
  NsGraphStatusCommand,
  XFlowDagCommands,
} from '@antv/xflow';
import { Popconfirm } from 'antd';
import { DagApi } from './service';

export namespace NSToolbarConfig {
  /** 注册icon 类型 */
  IconStore.set('SaveOutlined', SaveOutlined);
  IconStore.set('CloudSyncOutlined', CloudSyncOutlined);
  IconStore.set('GatewayOutlined', GatewayOutlined);
  IconStore.set('GroupOutlined', GroupOutlined);
  IconStore.set('UngroupOutlined', UngroupOutlined);
  IconStore.set('PlaySquareOutlined', PlaySquareOutlined);
  IconStore.set('StopOutlined', StopOutlined);

  /** toolbar依赖的状态 */
  export interface IToolbarState {
    isMultiSelectionActive: boolean;
    isNodeSelected: boolean;
    isGroupSelected: boolean;
    isProcessing: boolean;
  }

  export const getDependencies = async (modelService: IModelService) => {
    return [
      await MODELS.SELECTED_CELLS.getModel(modelService),
      await MODELS.GRAPH_ENABLE_MULTI_SELECT.getModel(modelService),
      await NsGraphStatusCommand.MODEL.getModel(modelService),
    ];
  };

  /** toolbar依赖的状态 */
  export const getToolbarState = async (modelService: IModelService) => {
    // isMultiSelectionActive
    const { isEnable: isMultiSelectionActive } = await MODELS.GRAPH_ENABLE_MULTI_SELECT.useValue(
      modelService,
    );
    // isGroupSelected
    const isGroupSelected = await MODELS.IS_GROUP_SELECTED.useValue(modelService);
    // isNormalNodesSelected: node不能是GroupNode
    const isNormalNodesSelected = await MODELS.IS_NORMAL_NODES_SELECTED.useValue(modelService);
    // statusInfo
    const statusInfo = await NsGraphStatusCommand.MODEL.useValue(modelService);

    return {
      isNodeSelected: isNormalNodesSelected,
      isGroupSelected,
      isMultiSelectionActive,
      isProcessing: statusInfo.graphStatus === NsGraphStatusCommand.StatusEnum.PROCESSING,
    } as NSToolbarConfig.IToolbarState;
  };

  export const getToolbarItems = async (state: IToolbarState) => {
    const toolbarGroup1: IToolbarItemOptions[] = [];
    /** 开始执行 */
    toolbarGroup1.push({
      id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'play',
      tooltip: 'Restart execution',
      iconName: 'PlaySquareOutlined',
      isEnabled: !state.isProcessing,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphStatusCommand.IArgs>(
          XFlowDagCommands.QUERY_GRAPH_STATUS.id,
          {
            graphStatusService: DagApi.graphStatusService,
            loopInterval: 3000,
          },
        );
      },
    });
    /** 停止执行 */
    toolbarGroup1.push({
      id: XFlowDagCommands.QUERY_GRAPH_STATUS.id + 'stop',
      tooltip: 'Stop execution',
      iconName: 'StopOutlined',
      isEnabled: state.isProcessing,
      onClick: async ({ commandService }) => {
        commandService.executeCommand<NsGraphStatusCommand.IArgs>(
          XFlowDagCommands.QUERY_GRAPH_STATUS.id,
          {
            graphStatusService: DagApi.stopGraphStatusService,
            loopInterval: 5000,
          },
        );
      },
      render: (props) => {
        return (
          <Popconfirm
            title="Confirm stop execution？"
            onConfirm={() => {
              props.onClick();
            }}
          >
            {props.children}
          </Popconfirm>
        );
      },
    });

    return [{ name: 'customCmd', items: toolbarGroup1 }];
  };
}
export const useToolbarConfig = createToolbarConfig((toolbarConfig) => {
  /** 生产 toolbar item */
  toolbarConfig.setToolbarModelService(async (toolbarModel, modelService, toDispose) => {
    const updateToolbarModel = async () => {
      const state = await NSToolbarConfig.getToolbarState(modelService);
      const toolbarItems = await NSToolbarConfig.getToolbarItems(state);
      toolbarModel.setValue((toolbar) => {
        toolbar.mainGroups = toolbarItems;
      });
    };
    const models = await NSToolbarConfig.getDependencies(modelService);
    const subscriptions = models.map((model) => {
      return model.watch(async () => {
        updateToolbarModel();
      });
    });
    toDispose.pushAll(subscriptions);
  });
});
