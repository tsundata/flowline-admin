import React from 'react';
/** app 核心组件 */
import type { IApplication, IAppLoad } from '@antv/xflow';
import { XFlow, XFlowCanvas } from '@antv/xflow';
/** 交互组件 */
import {
  CanvasNodePortTooltip,
  CanvasScaleToolbar,
  /** Graph的扩展交互组件 */
  CanvasSnapline,
  CanvasToolbar,
  DagGraphExtension,
  JsonSchemaForm,
} from '@antv/xflow';

/** app 组件配置  */
/** 配置画布 */
import { useGraphHookConfig } from './config-graph';
/** 配置Command */
import { initGraphCmds, useCmdConfig } from './config-cmd';
/** 配置Model */
import { useModelServiceConfig } from './config-model-service';
/** 配置Toolbar */
import { useToolbarConfig } from './config-toolbar';
/** 配置JsonConfigForm */
import { controlMapService, formSchemaService, formValueUpdateService } from './config-form';

import '@/components/Dag/index.less';
import '@antv/xflow/dist/index.css';

export interface IProps {
  meta: { flowId: any };
}

export const DagState: React.FC<IProps> = (props) => {
  const { meta } = props;
  const graphHooksConfig = useGraphHookConfig(props);
  const toolbarConfig = useToolbarConfig();
  const cmdConfig = useCmdConfig();
  const modelServiceConfig = useModelServiceConfig();

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
  const onLoad: IAppLoad = async (a) => {
    cache!.app = a;
    initGraphCmds(cache!.app);
  };

  /** 父组件meta属性更新时,执行initGraphCmds */
  React.useEffect(() => {
    if (cache!.app) {
      initGraphCmds(cache!.app);
    }
    // @ts-ignore
  }, [cache, cache.app, meta]);

  return (
    <XFlow
      className="dag-user-custom-clz"
      hookConfig={graphHooksConfig}
      modelServiceConfig={modelServiceConfig}
      commandConfig={cmdConfig}
      onLoad={onLoad}
      meta={{ flowId: props.meta.flowId }}
    >
      <DagGraphExtension />
      <CanvasToolbar
        className="xflow-workspace-toolbar-top"
        layout="horizontal"
        config={toolbarConfig}
        position={{ top: 0, left: 0, right: 290, bottom: 0 }}
      />
      <XFlowCanvas position={{ top: 40, left: 0, right: 290, bottom: 0 }}>
        <CanvasScaleToolbar position={{ top: 12, right: 12 }} />
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
    </XFlow>
  );
};

export default DagState;
