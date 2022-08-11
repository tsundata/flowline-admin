import { userCreate, userDelete, userList, userUpdate } from '@/services/flowline/user';
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormSwitch,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm';

/**
 * @en-US Add user
 * @zh-CN 添加用户
 * @param fields
 */
const handleAdd = async (fields: API.User) => {
  const hide = message.loading('Adding');
  try {
    const kind = 'user';
    const apiVersion = 'v1';
    await userCreate({ ...fields, kind, apiVersion });
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Adding failed, please try again!');
    return false;
  }
};

/**
 * @en-US Update user
 * @zh-CN 更新用户
 *
 * @param fields
 */
const handleUpdate = async (fields: API.User) => {
  const hide = message.loading('Updating');
  try {
    await userUpdate({ uid: fields.uid! }, fields);
    hide();

    message.success('Update is successful');
    return true;
  } catch (error) {
    hide();
    message.error('Update failed, please try again!');
    return false;
  }
};

/**
 *  Delete user
 * @zh-CN 删除用户
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.User[]) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await userDelete({
      uid: '-',
    });
    hide();
    message.success('Deleted successfully and will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const UserList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

  const [showDetail, setShowDetail] = useState<boolean>(false);

  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.User>();
  const [selectedRowsState, setSelectedRows] = useState<API.User[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.User>[] = [
    {
      title: <FormattedMessage id="pages.common.uid" defaultMessage="UID" />,
      dataIndex: 'uid',
      tip: 'The uid is the unique key',
      render: (dom, entity) => {
        return (
          <a
            onClick={() => {
              setCurrentRow(entity);
              setShowDetail(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: (
        <FormattedMessage id="pages.userList.form.userName.nameLabel" defaultMessage="User name" />
      ),
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.userList.form.roles" defaultMessage="roles" />,
      dataIndex: 'roles',
      renderText: (val: string[]) => val && val.join(', '),
    },
    {
      title: <FormattedMessage id="pages.userList.form.email" defaultMessage="user email" />,
      dataIndex: 'email',
    },
    {
      title: <FormattedMessage id="pages.userList.form.active" defaultMessage="active" />,
      dataIndex: 'active',
      renderText: (val: boolean) => (val ? <CheckOutlined /> : <CloseOutlined />),
    },
    {
      title: <FormattedMessage id="pages.userList.form.avatar" defaultMessage="avatar" />,
      dataIndex: 'avatar',
      valueType: 'image',
    },
    {
      title: <FormattedMessage id="pages.userList.titleCreatedAt" defaultMessage="Created time" />,
      sorter: true,
      dataIndex: 'creationTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.common.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.userList.form.userConfig" defaultMessage="Configuration" />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.User, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.common.tableTitle',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="uid"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> <FormattedMessage id="pages.common.new" defaultMessage="New" />
          </Button>,
        ]}
        request={async () => {
          const msg = await userList();
          return {
            data: msg.items,
            success: true,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
              <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
              <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            <FormattedMessage id="pages.common.batchDeletion" defaultMessage="Batch deletion" />
          </Button>
        </FooterToolbar>
      )}
      <ModalForm
        title={intl.formatMessage({
          id: 'pages.userList.form.newUser',
          defaultMessage: 'New user',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.User);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
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
          width="md"
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.name',
            defaultMessage: 'User name',
          })}
        />
        <ProFormText
          width="md"
          name="email"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.email.placeholder',
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
          width="md"
          name="password"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.password.placeholder',
            defaultMessage: 'User password',
          })}
        />
        <ProFormSwitch
          width="md"
          name="active"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.active.placeholder',
            defaultMessage: 'User active',
          })}
          label={intl.formatMessage({
            id: 'pages.userList.form.active',
            defaultMessage: 'Active',
          })}
        />
        <ProFormText
          width="md"
          name="avatar"
          placeholder={intl.formatMessage({
            id: 'pages.userList.form.avatar.placeholder',
            defaultMessage: 'User avatar',
          })}
        />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        visible={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.uid && (
          <ProDescriptions<API.User>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.User>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default UserList;
