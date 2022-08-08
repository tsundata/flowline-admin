import { EditorShape } from '@/components/Dag/form-controls/custom-editor';
import { SelectorShape } from '@/components/Dag/form-controls/custom-selector';
import { LinkShape } from '@/components/Dag/form-controls/link';
import type { NsJsonSchemaForm } from '@antv/xflow';

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
