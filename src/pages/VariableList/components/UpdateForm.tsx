import { ProForm, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  describe?: string;
  value?: string;
} & Partial<API.Variable>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Variable>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  return (
    <Modal
      width={800}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.variableList.form.variableConfig',
        defaultMessage: '变量编辑',
      })}
      visible={props.updateModalVisible}
      onCancel={() => {
        props.onCancel();
      }}
      footer={null}
    >
      <ProForm
        initialValues={{
          name: props.values.name,
          describe: props.values.describe,
          value: props.values.value,
        }}
        title={intl.formatMessage({
          id: 'pages.searchTable.updateForm.basicConfig',
          defaultMessage: '基本信息',
        })}
        onFinish={async (values: FormValueType) => {
          await props.onSubmit({ ...props.values, ...values });
          return true;
        }}
        submitter={{
          submitButtonProps: {},
          render: (p) => {
            return [
              <Button type="primary" key="submit" onClick={() => p.form?.submit?.()}>
                提交
              </Button>,
              <Button type="dashed" key="rest" onClick={() => p.form?.resetFields()}>
                重置
              </Button>,
              <Button type="dashed" key="cancel" onClick={() => props.onCancel()}>
                取消
              </Button>,
            ];
          },
        }}
      >
        <ProFormText
          name="name"
          label={intl.formatMessage({
            id: 'pages.variableList.form.name',
            defaultMessage: '变量名称',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.variableList.ruleName"
                  defaultMessage="请输入变量名称！"
                />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="describe"
          label={intl.formatMessage({
            id: 'pages.variableList.form.describe',
            defaultMessage: '变量描述',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.variableList.form.describe.descPlaceholder',
            defaultMessage: '请输入变量描述',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.variableList.form.describe.descPlaceholder"
                  defaultMessage="请输入变量描述！"
                />
              ),
              min: 1,
            },
          ]}
        />
        <ProFormText
          name="value"
          label={intl.formatMessage({
            id: 'pages.variableList.form.value',
            defaultMessage: '变量值',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.variableList.form.value.rule"
                  defaultMessage="请输入变量值！"
                />
              ),
            },
          ]}
        />
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
