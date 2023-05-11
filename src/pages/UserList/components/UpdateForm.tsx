import { roleList } from '@/services/flowline/role';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Form, Modal, Select } from 'antd';
import React from 'react';

export type FormValueType = {
  name?: string;
  email?: string;
  password?: string;
  active?: boolean;
  avatar?: string;
} & Partial<API.User>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.User>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();
  const [roles, setRoles] = React.useState<any[]>();

  React.useEffect(() => {
    roleList().then((res) => {
      const r: React.SetStateAction<any[] | undefined> = [];
      if (res != null && res.items != null) {
        res.items.forEach((i) => {
          r.push({ label: i.name, value: i.name });
        });
      }
      setRoles(r);
    });
  }, []);

  return (
    <Modal
      width={800}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.userList.form.userConfig',
        defaultMessage: '用户编辑',
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
          email: props.values.email,
          password: props.values.password,
          active: props.values.active,
          avatar: props.values.avatar,
          roles: props.values.roles,
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
                  id="pages.userList.ruleName"
                  defaultMessage="User name is required"
                />
              ),
            },
          ]}
          name="name"
          disabled={true}
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.name',
            defaultMessage: 'User name',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.name',
            defaultMessage: 'User name',
          })}
        />
        <ProFormText
          name="email"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.email.placeholder',
            defaultMessage: 'User email',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.email',
            defaultMessage: 'User email',
          })}
        />
        <ProFormText.Password
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.userList.form.password.rule"
                  defaultMessage="User password is required"
                />
              ),
            },
          ]}
          name="password"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.password.placeholder',
            defaultMessage: 'User password',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.password',
            defaultMessage: 'User password',
          })}
        />
        <ProFormSwitch
          name="active"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.active.placeholder',
            defaultMessage: 'User active',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.active',
            defaultMessage: 'User active',
          })}
        />
        <ProFormText
          name="avatar"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.avatar.placeholder',
            defaultMessage: 'User avatar',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.avatar',
            defaultMessage: 'User avatar',
          })}
        />
        <Form.Item
          name="roles"
          label={intl.formatMessage({
            id: 'pages.userList.form.roles',
            defaultMessage: 'Roles',
          })}
        >
          <Select
            mode="multiple"
            options={roles}
            placeholder={intl.formatMessage({
              id: 'pages.userList.form.roles.placeholder',
              defaultMessage: 'Roles',
            })}
          />
        </Form.Item>
      </ProForm>
    </Modal>
  );
};

export default UpdateForm;
