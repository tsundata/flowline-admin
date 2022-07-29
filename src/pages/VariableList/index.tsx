import {
  variableCreate,
  variableDelete,
  variableList,
  variableUpdate,
} from '@/services/flowline/variable';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, message } from 'antd';
import React, { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm';

/**
 * @en-US Add variable
 * @zh-CN 添加变量
 * @param fields
 */
const handleAdd = async (fields: API.Variable) => {
  const hide = message.loading('Adding');
  try {
    const kind = 'variable';
    const apiVersion = 'v1';
    await variableCreate({ ...fields, kind, apiVersion });
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
 * @en-US Update variable
 * @zh-CN 更新变量
 *
 * @param fields
 */
const handleUpdate = async (fields: API.Variable) => {
  const hide = message.loading('Updating');
  try {
    await variableUpdate({ uid: fields.uid! }, fields);
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
 *  Delete variable
 * @zh-CN 删除变量
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.Variable[]) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await variableDelete({
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

const VariableList: React.FC = () => {
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
  const [currentRow, setCurrentRow] = useState<API.Variable>();
  const [selectedRowsState, setSelectedRows] = useState<API.Variable[]>([]);

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.Variable>[] = [
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
          id="pages.variableList.form.variableName.nameLabel"
          defaultMessage="Variable name"
        />
      ),
      dataIndex: 'name',
    },
    {
      title: (
        <FormattedMessage id="pages.variableList.form.value" defaultMessage="variable value" />
      ),
      dataIndex: 'value',
    },
    {
      title: <FormattedMessage id="pages.variableList.titleDesc" defaultMessage="Description" />,
      dataIndex: 'describe',
      valueType: 'textarea',
    },
    {
      title: (
        <FormattedMessage id="pages.variableList.titleCreatedAt" defaultMessage="Created time" />
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
            id="pages.variableList.form.variableConfig"
            defaultMessage="Configuration"
          />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Variable, API.PageParams>
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
          const msg = await variableList();
          return {
            data: msg.Items,
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
          id: 'pages.variableList.form.newVariable',
          defaultMessage: 'New variable',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Variable);
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
                  id="pages.variableList.ruleName"
                  defaultMessage="Variable name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.variableList.form.name',
            defaultMessage: 'Variable name',
          })}
        />
        <ProFormTextArea
          width="md"
          name="describe"
          placeholder={intl.formatMessage({
            id: 'pages.variableList.form.describe',
            defaultMessage: 'Variable describe',
          })}
        />
        <ProFormText
          rules={[
            {
              required: true,
              message: (
                <FormattedMessage
                  id="pages.variableList.form.value.rule"
                  defaultMessage="Variable value is required"
                />
              ),
            },
          ]}
          width="md"
          name="value"
          placeholder={intl.formatMessage({
            id: 'pages.variableList.form.value.rule',
            defaultMessage: 'Variable value',
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
          <ProDescriptions<API.Variable>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Variable>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default VariableList;
