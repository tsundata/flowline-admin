import { SelectorShape } from '@/pages/WorkflowDag/form-controls/custom-selector';
import type { NsJsonSchemaForm } from '@antv/xflow';
import { EditorShape } from './custom-editor';
import { LinkShape } from './link';

/** 自定义form控件 */
export enum ControlShapeEnum {
  'EDITOR' = 'EDITOR',
  'SELECTOR' = 'SELECTOR',
  'LINKSHAPE' = 'LINKSHAPE',
}

export const controlMapService: NsJsonSchemaForm.IControlMapService = (controlMap) => {
  controlMap.set(ControlShapeEnum.EDITOR, EditorShape);
  controlMap.set(ControlShapeEnum.SELECTOR, SelectorShape);
  controlMap.set(ControlShapeEnum.LINKSHAPE, LinkShape);
  return controlMap;
};
