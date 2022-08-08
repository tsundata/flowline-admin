import type { NsJsonSchemaForm, NsNodeCmd } from '@antv/xflow';
import { FormItemWrapper, MODELS, useXFlowApp, XFlowNodeCommands } from '@antv/xflow';
import { Form, Select } from 'antd';
import React, { useState } from 'react';

const Selector: React.FC<IEditorProps> = (props) => {
  const { options, placeholder, disabled, value, name } = props;
  const { commandService, modelService } = useXFlowApp();

  let defaultValue = value;
  let mode: 'multiple' | 'tags' | undefined = undefined;
  if (name != 'code') {
    mode = 'multiple';
    if (value == null || value == '') {
      const empty: any = [];
      defaultValue = empty;
    }
  }
  const [selectValue, setSelectValue] = useState(defaultValue);

  const handleOnChange = (val: any) => {
    MODELS.SELECTED_NODES.useValue(modelService).then((res) => {
      res[0].data[name] = val;
      setSelectValue(val);
      commandService.executeCommand<NsNodeCmd.UpdateNode.IArgs>(XFlowNodeCommands.UPDATE_NODE.id, {
        nodeConfig: res[0].data,
      });
    });
  };

  return (
    <Select
      mode={mode}
      options={options}
      value={selectValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleOnChange}
    />
  );
};

export const SelectorShape: React.FC<NsJsonSchemaForm.IControlProps> = (props) => {
  const { controlSchema } = props;
  const { required, tooltip, extra, name, label, placeholder, options } = controlSchema;

  return (
    <FormItemWrapper schema={controlSchema}>
      {({ disabled, hidden, initialValue }) => {
        return (
          <Form.Item
            name={name}
            label={label}
            initialValue={initialValue}
            tooltip={tooltip}
            extra={extra}
            required={required}
            hidden={hidden}
          >
            {/* 这里的组件可以拿到onChange和value */}
            <Selector
              controlSchema={controlSchema}
              options={options}
              placeholder={placeholder}
              disabled={disabled}
              name={name}
            />
          </Form.Item>
        );
      }}
    </FormItemWrapper>
  );
};

interface IEditorProps extends NsJsonSchemaForm.IFormItemProps {
  controlSchema: NsJsonSchemaForm.IControlSchema;
  placeholder?: string;
  disabled: boolean;
  options: any;
  name: any;
}
