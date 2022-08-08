import { controlMapService, ControlShapeEnum } from '@/components/Dag/form-controls';
import { codeList } from '@/services/flowline/code';
import { connectionList } from '@/services/flowline/connection';
import { variableList } from '@/services/flowline/variable';
import type { NsJsonSchemaForm } from '@antv/xflow';
import { MODELS } from '@antv/xflow';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async (args) => {
  const { modelService, targetType } = args;
  /** 可以使用获取 graphMeta */
  const graphMeta = await MODELS.GRAPH_META.useValue(modelService);

  if (targetType === 'canvas') {
    return {
      tabs: [
        {
          name: 'DagMeta',
          groups: [
            {
              name: 'groupName',
              controls: [
                {
                  name: 'workflowUID',
                  label: 'Workflow UID',
                  shape: 'Input',
                  disabled: true,
                  required: true,
                  tooltip: 'Workflow UID',
                  extra: '',
                  placeholder: 'workflow uid',
                  value: '',
                  defaultValue: graphMeta.flowId, // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: 'Graph data',
                  name: 'graphJSON',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.EDITOR,
                  disabled: false,
                  required: true,
                  tooltip: 'JSON 数据',
                  placeholder: 'JSON 数据',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: 'View log link',
                  name: 'log',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.LINKSHAPE,
                  disabled: false,
                  required: true,
                  tooltip: 'log link',
                  placeholder: 'log link',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
              ],
            },
          ],
        },
      ],
    };
  }

  console.log('node data', args.targetData);

  const codes = await codeList();
  const variables = await variableList();
  const connections = await connectionList();

  // @ts-ignore
  const codeOptions = [];
  if (codes != null && codes.items != null) {
    codes.items.forEach((i) => {
      codeOptions.push({ label: i.name, value: i.uid });
    });
  }
  // @ts-ignore
  const variableOptions = [];
  if (variables != null && variables.items != null) {
    console.log(variables);
    variables.items.forEach((i) => {
      variableOptions.push({ label: i.name, value: i.uid });
    });
  }
  // @ts-ignore
  const connectionOptions = [];
  if (connections != null && connections.items != null) {
    connections.items.forEach((i) => {
      connectionOptions.push({ label: i.name, value: i.uid });
    });
  }

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: 'NodeMeta',
        groups: [
          {
            name: 'nodeName',
            controls: [
              {
                label: 'Code',
                name: 'code',
                /** 使用自定义shape */
                shape: ControlShapeEnum.SELECTOR,
                disabled: true,
                required: true,
                tooltip: 'The code to be run by the compute node',
                placeholder: 'please select code',
                value: args.targetData?.code,
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                // @ts-ignore
                options: codeOptions,
                originData: {}, // 原始数据
              },
              {
                label: 'Variables',
                name: 'variables',
                shape: ControlShapeEnum.SELECTOR,
                disabled: true,
                required: false,
                tooltip: 'Variables loaded by compute nodes',
                placeholder: 'please select connections',
                value: args.targetData?.variables,
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                // @ts-ignore
                options: variableOptions,
                originData: {}, // 原始数据
              },
              {
                label: 'Connections',
                name: 'connections',
                shape: ControlShapeEnum.SELECTOR,
                disabled: true,
                required: false,
                tooltip: 'Connections loaded by compute nodes',
                placeholder: 'please select connections',
                value: args.targetData?.connections,
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                // @ts-ignore
                options: connectionOptions,
                originData: {}, // 原始数据
              },
            ],
          },
        ],
      },
    ],
  };

  return nodeSchema;
};

export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async (args) => {
  console.log('formValueUpdateService', args);
};

export { controlMapService };
