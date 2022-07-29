import {
  ProForm,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Modal } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  describe?: string;
  type?: string;
  host?: string;
  schema?: string;
  login?: string;
  password?: string;
  port?: number;
  extra?: string;
} & Partial<API.Connection>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.Connection>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  return (
    <Modal
      width={800}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.connectionList.form.connectionConfig',
        defaultMessage: '连接编辑',
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
          type: props.values.type,
          host: props.values.host,
          schema: props.values.schema,
          login: props.values.login,
          password: props.values.password,
          port: props.values.port,
          extra: props.values.extra,
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
                  id="pages.connectionList.ruleName"
                  defaultMessage="Connection name is required"
                />
              ),
            },
          ]}
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.name',
            defaultMessage: 'Connection name',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.name',
            defaultMessage: 'Connection name',
          })}
        />
        <ProFormTextArea
          name="describe"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.describe',
            defaultMessage: 'Connection describe',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.describe',
            defaultMessage: 'Connection describe',
          })}
        />
        <ProFormSelect
          name="type"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.type.placeholder',
            defaultMessage: 'Connection type',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.type',
            defaultMessage: 'Connection type',
          })}
          valueEnum={{
            mysql: 'MySQL',
            redis: 'Redis',
            amazon_s3: 'Amazon S3',
          }}
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.connectionList.form.type.rule"
                  defaultMessage="Connection type"
                />
              ),
            },
          ]}
        />
        <ProFormText
          name="host"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.host.placeholder',
            defaultMessage: 'Connection host',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.host',
            defaultMessage: 'Connection host',
          })}
        />
        <ProFormText
          name="schema"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.schema.placeholder',
            defaultMessage: 'Connection schema',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.schema',
            defaultMessage: 'Connection schema',
          })}
        />
        <ProFormText
          name="login"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.login.placeholder',
            defaultMessage: 'Connection login',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.login',
            defaultMessage: 'Connection login',
          })}
        />
        <ProFormText.Password
          name="password"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.password.placeholder',
            defaultMessage: 'Connection password',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.password',
            defaultMessage: 'Connection password',
          })}
        />
        <ProFormDigit
          name="port"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.port.placeholder',
            defaultMessage: 'Connection port',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.port',
            defaultMessage: 'Connection port',
          })}
        />
        <ProFormTextArea
          name="extra"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.extra',
            defaultMessage: 'Connection extra',
          })}
          label={intl.formatMessage({
            id: 'pages.connectionList.form.extra',
            defaultMessage: 'Connection extra',
          })}
        />
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
