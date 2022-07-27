import React from 'react';
/** app 核心组件 */
import type { IApplication, IAppLoad } from '@antv/xflow';
import { KeyBindings, XFlow, XFlowCanvas } from '@antv/xflow';
/** 交互组件 */
import {
  CanvasContextMenu,
  CanvasNodePortTooltip,
  CanvasScaleToolbar,
  /** Graph的扩展交互组件 */
  CanvasSnapline,
  CanvasToolbar,
  DagGraphExtension,
  JsonSchemaForm,
  NodeCollapsePanel,
} from '@antv/xflow';

/** app 组件配置  */
/** 配置画布 */
import { useGraphHookConfig } from './config-graph';
/** 配置Command */
import { initGraphCmds, useCmdConfig } from './config-cmd';
/** 配置Model */
import { useModelServiceConfig } from './config-model-service';
/** 配置Menu */
import { useMenuConfig } from './config-menu';
/** 配置Toolbar */
import { useToolbarConfig } from './config-toolbar';
/** 配置快捷键 */
import { useKeybindingConfig } from './config-keybinding';
/** 配置Dnd组件面板 */
import * as dndPanelConfig from './config-dnd-panel';
/** 配置JsonConfigForm */
import { controlMapService, formSchemaService, formValueUpdateService } from './config-form';

import '@antv/xflow/dist/index.css';
import { useParams } from '@umijs/max';
import './index.less';

export interface IProps {
  meta: { flowId: string; dagId: string };
}

export const WorkflowDag: React.FC<IProps> = (props) => {
  const { meta } = props;
  const graphHooksConfig = useGraphHookConfig(props);
  const toolbarConfig = useToolbarConfig();
  const menuConfig = useMenuConfig();
  const cmdConfig = useCmdConfig();
  const modelServiceConfig = useModelServiceConfig();
  const keybindingConfig = useKeybindingConfig();
  const params = useParams();

  const cache = React.useMemo<{ app: IApplication } | null>(
    () => ({
      // @ts-ignore
      app: null,
    }),
    [],
  );
  /**
   * @param app 当前XFlow工作空间
   * @param extensionRegistry 当前XFlow配置项
   */

  const onLoad: IAppLoad = async (app) => {
    console.log('params', params.uid);
    cache!.app = app;
    initGraphCmds(cache!.app, params.uid!);
  };

  /** 父组件meta属性更新时,执行initGraphCmds */
  React.useEffect(() => {
    if (cache!.app) {
      initGraphCmds(cache!.app, params.uid!);
    }
    // @ts-ignore
  }, [cache.app, meta]);

  return (
    <XFlow
      className="dag-user-custom-clz"
      hookConfig={graphHooksConfig}
      modelServiceConfig={modelServiceConfig}
      commandConfig={cmdConfig}
      onLoad={onLoad}
      meta={meta}
    >
      <DagGraphExtension />
      <NodeCollapsePanel
        className="xflow-node-panel"
        searchService={dndPanelConfig.searchService}
        nodeDataService={dndPanelConfig.nodeDataService}
        onNodeDrop={dndPanelConfig.onNodeDrop}
        position={{ width: 230, top: 0, bottom: 0, left: 0 }}
        footerPosition={{ height: 0 }}
        bodyPosition={{ top: 40, bottom: 0, left: 0 }}
      />
      <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 230, right: 290, bottom: 0 }}
      />
      <XFlowCanvas position={{ top: 40, left: 230, right: 290, bottom: 0 }}>
        <CanvasScaleToolbar position={{ top: 12, right: 12 }} />
        <CanvasContextMenu config={menuConfig} />
        <CanvasSnapline color="#faad14" />
        <CanvasNodePortTooltip />
      </XFlowCanvas>
      <JsonSchemaForm
        controlMapService={controlMapService}
        formSchemaService={formSchemaService}
        formValueUpdateService={formValueUpdateService}
        bodyPosition={{ top: 0, bottom: 0, right: 0 }}
        position={{ width: 290, top: 0, bottom: 0, right: 0 }}
        footerPosition={{ height: 0 }}
      />
      <KeyBindings config={keybindingConfig} />
    </XFlow>
  );
};

export default WorkflowDag;

WorkflowDag.defaultProps = {
  meta: { flowId: 'workflow-meta-workflow-id', dagId: 'workflow-meta-dag-id' },
};
