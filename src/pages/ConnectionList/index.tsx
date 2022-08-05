import {
  connectionCreate,
  connectionDelete,
  connectionList,
  connectionUpdate,
} from '@/services/flowline/connection';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProColumns,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm';

/**
 * @en-US Add connection
 * @zh-CN 添加连接
 * @param fields
 */
const handleAdd = async (fields: API.Connection) => {
  const hide = message.loading('Adding');
  try {
    const kind = 'connection';
    const apiVersion = 'v1';
    await connectionCreate({ ...fields, kind, apiVersion });
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
 * @en-US Update connection
 * @zh-CN 更新连接
 *
 * @param fields
 */
const handleUpdate = async (fields: API.Connection) => {
  const hide = message.loading('Updating');
  try {
    await connectionUpdate({ uid: fields.uid! }, fields);
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
 *  Delete connection
 * @zh-CN 删除连接
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.Connection[]) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await connectionDelete({
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

const ConnectionList: React.FC = () => {
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
  const [currentRow, setCurrentRow] = useState<API.Connection>();
  const [selectedRowsState, setSelectedRows] = useState<API.Connection[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.Connection>[] = [
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
        <FormattedMessage
          id="pages.connectionList.form.connectionName.nameLabel"
          defaultMessage="Connection name"
        />
      ),
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.connectionList.titleDesc" defaultMessage="Description" />,
      dataIndex: 'describe',
      valueType: 'textarea',
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.form.type" defaultMessage="connection type" />
      ),
      dataIndex: 'type',
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.form.host" defaultMessage="connection host" />
      ),
      dataIndex: 'host',
    },
    {
      title: (
        <FormattedMessage
          id="pages.connectionList.form.schema"
          defaultMessage="connection schema"
        />
      ),
      dataIndex: 'schema',
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.form.login" defaultMessage="connection login" />
      ),
      dataIndex: 'login',
    },
    {
      title: (
        <FormattedMessage
          id="pages.connectionList.form.password"
          defaultMessage="connection password"
        />
      ),
      dataIndex: 'password',
      valueType: 'password',
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.form.port" defaultMessage="connection port" />
      ),
      dataIndex: 'port',
      hideInForm: true,
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.form.extra" defaultMessage="connection extra" />
      ),
      dataIndex: 'extra',
      hideInForm: true,
    },
    {
      title: (
        <FormattedMessage id="pages.connectionList.titleCreatedAt" defaultMessage="Created time" />
      ),
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
          <FormattedMessage
            id="pages.connectionList.form.connectionConfig"
            defaultMessage="Configuration"
          />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Connection, API.PageParams>
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
          const msg = await connectionList();
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
          id: 'pages.connectionList.form.newConnection',
          defaultMessage: 'New connection',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Connection);
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
                  id="pages.connectionList.ruleName"
                  defaultMessage="Connection name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.name',
            defaultMessage: 'Connection name',
          })}
        />
        <ProFormTextArea
          width="md"
          name="describe"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.describe',
            defaultMessage: 'Connection describe',
          })}
        />
        <ProFormSelect
          width="md"
          name="type"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.type.placeholder',
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
          width="md"
          name="host"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.host.placeholder',
            defaultMessage: 'Connection host',
          })}
        />
        <ProFormText
          width="md"
          name="schema"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.schema.placeholder',
            defaultMessage: 'Connection schema',
          })}
        />
        <ProFormText
          width="md"
          name="login"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.login.placeholder',
            defaultMessage: 'Connection login',
          })}
        />
        <ProFormText.Password
          width="md"
          name="password"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.password.placeholder',
            defaultMessage: 'Connection password',
          })}
        />
        <ProFormDigit
          width="md"
          name="port"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.port.placeholder',
            defaultMessage: 'Connection port',
          })}
        />
        <ProFormTextArea
          width="md"
          name="extra"
          placeholder={intl.formatMessage({
            id: 'pages.connectionList.form.extra',
            defaultMessage: 'Connection extra',
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
          <ProDescriptions<API.Connection>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Connection>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default ConnectionList;
