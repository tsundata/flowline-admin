/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NsRenameNodeCmd } from '@/components/Dag/cmd-extensions/cmd-rename-node-modal';
import { CustomCommands } from '@/components/Dag/cmd-extensions/constants';
import { DeleteOutlined, EditOutlined, StopOutlined } from '@ant-design/icons';
import type { IMenuOptions, NsEdgeCmd, NsGraph, NsNodeCmd } from '@antv/xflow';
import {
  createCtxMenuConfig,
  IconStore,
  MenuItemType,
  XFlowEdgeCommands,
  XFlowNodeCommands,
} from '@antv/xflow';
import { Modal } from 'antd';
import { DagApi } from './service';

/** menuitem 配置 */
export namespace NsMenuItemConfig {
  /** 注册菜单依赖的icon */
  IconStore.set('DeleteOutlined', DeleteOutlined);
  IconStore.set('EditOutlined', EditOutlined);
  IconStore.set('StopOutlined', StopOutlined);

  export const DELETE_EDGE: IMenuOptions = {
    id: XFlowEdgeCommands.DEL_EDGE.id,
    label: 'Delete edge',
    iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      commandService.executeCommand<NsEdgeCmd.DelEdge.IArgs>(XFlowEdgeCommands.DEL_EDGE.id, {
        edgeConfig: target.data as NsGraph.IEdgeConfig,
      });
    },
  };

  export const DELETE_NODE: IMenuOptions = {
    id: XFlowNodeCommands.DEL_NODE.id,
    label: 'Delete node',
    iconName: 'DeleteOutlined',
    onClick: async ({ target, commandService }) => {
      Modal.confirm({
        title: 'Confirm delete node?',
        content: `${target.data?.label} [${target.data?.id}]`,
        okText: 'Confirm',
        cancelText: 'Cancel',
        onOk: () => {
          commandService.executeCommand<NsNodeCmd.DelNode.IArgs>(XFlowNodeCommands.DEL_NODE.id, {
            // @ts-ignore
            nodeConfig: { id: target.data.id },
          });
        },
      });
    },
  };

  export const EMPTY_MENU: IMenuOptions = {
    id: 'EMPTY_MENU_ITEM',
    label: 'Not available yet',
    isEnabled: false,
    iconName: 'DeleteOutlined',
  };

  export const RENAME_NODE: IMenuOptions = {
    id: CustomCommands.SHOW_RENAME_MODAL.id,
    label: 'Rename',
    isVisible: true,
    iconName: 'EditOutlined',
    onClick: async ({ target, commandService }) => {
      const nodeConfig = target.data as NsGraph.INodeConfig;
      commandService.executeCommand<NsRenameNodeCmd.IArgs>(CustomCommands.SHOW_RENAME_MODAL.id, {
        nodeConfig,
        updateNodeNameService: DagApi.renameNode,
      });
    },
  };

  export const SEPARATOR: IMenuOptions = {
    id: 'separator',
    type: MenuItemType.Separator,
  };
}

export const useMenuConfig = createCtxMenuConfig((config) => {
  config.setMenuModelService(async (target, model, modelService, toDispose) => {
    // @ts-ignore
    const { type, cell } = target;
    console.log(type);
    switch (type) {
      /** 节点菜单 */
      case 'node':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_NODE, NsMenuItemConfig.RENAME_NODE],
        });
        break;
      /** 边菜单 */
      case 'edge':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.DELETE_EDGE],
        });
        break;
      /** 画布菜单 */
      case 'blank':
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        });
        break;
      /** 默认菜单 */
      default:
        model.setValue({
          id: 'root',
          type: MenuItemType.Root,
          submenu: [NsMenuItemConfig.EMPTY_MENU],
        });
        break;
    }
  });
});
