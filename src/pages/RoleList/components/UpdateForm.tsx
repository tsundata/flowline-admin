import { ProForm, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  email?: string;
  password?: string;
  active?: boolean;
  avatar?: string;
} & Partial<API.Role>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Role>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  const verbs = [
    { label: 'GET', value: 'GET' },
    { label: 'LIST', value: 'LIST' },
    { label: 'WATCH', value: 'WATCH' },
    { label: 'POST', value: 'POST' },
    { label: 'PATCH', value: 'PATCH' },
    { label: 'PUT', value: 'PUT' },
    { label: 'DELETE', value: 'DELETE' },
  ];
  const resources = [
    { label: 'code', value: 'code' },
    { label: 'connection', value: 'connection' },
    { label: 'dag', value: 'dag' },
    { label: 'job', value: 'job' },
    { label: 'role', value: 'role' },
    { label: 'user', value: 'user' },
    { label: 'variable', value: 'variable' },
    { label: 'workflow', value: 'workflow' },
    { label: 'event', value: 'event' },
    { label: 'stage', value: 'stage' },
    { label: 'worker', value: 'worker' },
  ];

  return (
    <Modal
      width={800}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.roleList.form.roleConfig',
        defaultMessage: '用户编辑',
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
          verbs: props.values.verbs,
          resources: props.values.resources,
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
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.roleList.ruleName"
                  defaultMessage="Role name is required"
                />
              ),
            },
          ]}
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.roleList.form.name',
            defaultMessage: 'Role name',
          })}
          label={intl.formatMessage({
            id: 'pages.roleList.form.name',
            defaultMessage: 'Role name',
          })}
        />
        <Form.Item
          name="verbs"
          label={intl.formatMessage({
            id: 'pages.userList.form.verbs',
            defaultMessage: 'verbs',
          })}
        >
          <Select
            mode="multiple"
            options={verbs}
            placeholder={intl.formatMessage({
              id: 'pages.roleList.form.verbs.placeholder',
              defaultMessage: 'verbs',
            })}
          />
        </Form.Item>
        <Form.Item
          name="resources"
          label={intl.formatMessage({
            id: 'pages.roleList.form.resources',
            defaultMessage: 'resources',
          })}
        >
          <Select
            mode="multiple"
            options={resources}
            placeholder={intl.formatMessage({
              id: 'pages.roleList.form.resources.placeholder',
              defaultMessage: 'resources',
            })}
          />
        </Form.Item>
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
