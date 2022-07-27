import type { NsJsonSchemaForm } from '@antv/xflow';
import { MODELS } from '@antv/xflow';
import { controlMapService, ControlShapeEnum } from './form-controls';

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export const formSchemaService: NsJsonSchemaForm.IFormSchemaService = async (args) => {
  const { modelService, targetType } = args;
  /** 可以使用获取 graphMeta */
  const graphMeta = await MODELS.GRAPH_META.useValue(modelService);
  console.log('formSchemaService', graphMeta, args);

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
                  name: 'Tab2-1',
                  label: 'DAG名称',
                  shape: 'Input',
                  disabled: false,
                  required: true,
                  tooltip: 'DAG名称',
                  extra: 'WorkflowUID: fa97821a-5661-4744-a1b2-fcb3f09fcb45',
                  placeholder: 'please write dag name',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: '图数据',
                  name: 'Tab1-0',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.EDITOR,
                  disabled: false,
                  required: true,
                  tooltip: 'JSON 数据',
                  placeholder: 'please write something',
                  value: '',
                  defaultValue: '', // 可以认为是默认值
                  hidden: false,
                  options: [{ title: '', value: '' }],
                  originData: {}, // 原始数据
                },
                {
                  label: '查看日志链接',
                  name: 'Tab1-1',
                  /** 使用自定义shape */
                  shape: ControlShapeEnum.LINKSHAPE,
                  disabled: false,
                  required: true,
                  tooltip: 'hello world',
                  placeholder: 'please write something',
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

  const nodeSchema: NsJsonSchemaForm.ISchema = {
    tabs: [
      {
        name: 'NodeMeta',
        groups: [
          {
            name: 'groupName',
            controls: [
              {
                label: 'CodeEditor',
                name: 'Tab1-0',
                /** 使用自定义shape */
                shape: ControlShapeEnum.EDITOR,
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-2',
                name: 'Tab1-2',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-3',
                name: 'Tab1-3',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
                value: '',
                defaultValue: '', // 可以认为是默认值
                hidden: false,
                options: [{ title: '', value: '' }],
                originData: {}, // 原始数据
              },
              {
                label: 'Tab1-4',
                name: 'Tab1-4',
                shape: 'Input',
                disabled: false,
                required: true,
                tooltip: 'hello world',
                placeholder: 'please write something',
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

  return nodeSchema;
};

export const formValueUpdateService: NsJsonSchemaForm.IFormValueUpdateService = async (args) => {
  console.log('formValueUpdateService', args);
};

export { controlMapService };
