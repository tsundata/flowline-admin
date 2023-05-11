import { ProForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Form, Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  describe?: string;
  runtime?: string;
  code?: string;
} & Partial<API.Code>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Code>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  return (
    <Modal
      width={800}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.codeList.form.codeConfig',
        defaultMessage: '代码编辑',
      })}
      open={props.updateModalVisible}
      onCancel={() => {
        props.onCancel();
      }}
      footer={null}
    >
      <ProForm
        initialValues={{
          name: props.values.name,
          describe: props.values.describe,
          runtime: props.values.runtime,
          code: props.values.code,
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
            id: 'pages.codeList.form.name',
            defaultMessage: '代码名称',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage id="pages.codeList.ruleName" defaultMessage="请输入代码名称！" />
              ),
            },
          ]}
        />
        <ProFormTextArea
          name="describe"
          label={intl.formatMessage({
            id: 'pages.codeList.form.describe',
            defaultMessage: '代码描述',
          })}
          placeholder={intl.formatMessage({
            id: 'pages.codeList.form.describe.descPlaceholder',
            defaultMessage: '请输入代码描述',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.codeList.form.describe.descPlaceholder"
                  defaultMessage="请输入代码描述！"
                />
              ),
              min: 1,
            },
          ]}
        />
        <ProFormSelect
          name="runtime"
          label={intl.formatMessage({
            id: 'pages.codeList.form.runtime',
            defaultMessage: '运行环境',
          })}
          valueEnum={{
            javascript: 'JavaScript',
            go: 'Go',
          }}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.codeList.form.runtime.rule"
                  defaultMessage="请选择运行环境！"
                />
              ),
            },
          ]}
        />
        <Form.Item
          name="code"
          label={intl.formatMessage({
            id: 'pages.codeList.form.code',
            defaultMessage: '代码',
          })}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.codeList.form.code.rule"
                  defaultMessage="请输入代码！"
                />
              ),
              min: 1,
            },
          ]}
        >
          <CodeMirror
            value={props.values.code}
            width="100%"
            height="300px"
            onChange={(value) => {
              props.values.code = value;
            }}
            extensions={[javascript({jsx: true})]}
          />
        </Form.Item>
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
