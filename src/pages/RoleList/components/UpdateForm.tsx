import { ProForm, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Modal } from 'antd';
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
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
