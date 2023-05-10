import EventList from '@/components/Events';
import {
  workflowCreate,
  workflowCreateSchedule,
  workflowDelete,
  workflowList,
  workflowUpdate,
} from '@/services/flowline/workflow';
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
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
import { FormattedMessage, useIntl, useNavigate } from '@umijs/max';
import { Button, Drawer, Input, message, Modal, Tag } from 'antd';
import React, { useRef, useState } from 'react';
import JobList from './components/JobsList';
import UpdateForm from './components/UpdateForm';

/**
 * @en-US Add workflow
 * @zh-CN 添加工作流
 * @param fields
 */
const handleAdd = async (fields: API.Workflow) => {
  const hide = message.loading('Adding');
  try {
    const kind = 'workflow';
    const apiVersion = 'v1';
    const active = true;
    await workflowCreate({ ...fields, kind, apiVersion, active });
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
 * @en-US Update workflow
 * @zh-CN 更新工作流
 *
 * @param fields
 */
const handleUpdate = async (fields: API.Workflow) => {
  const hide = message.loading('Updating');
  try {
    await workflowUpdate({ uid: fields.uid! }, fields);
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
 *  Delete workflow
 * @zh-CN 删除工作流
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.Workflow[]) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await workflowDelete({
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

const WorkflowList: React.FC = () => {
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
  const [currentRow, setCurrentRow] = useState<API.Workflow>();
  const [selectedRowsState, setSelectedRows] = useState<API.Workflow[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isJobsModalVisible, setIsJobsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showJobsModal = () => {
    setIsJobsModalVisible(true);
  };
  const handleClose = () => {
    setCurrentRow(undefined);
    setIsModalVisible(false);
    setIsJobsModalVisible(false);
  };

  const navigate = useNavigate();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.Workflow>[] = [
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
          id="pages.workflowList.form.workflowName.nameLabel"
          defaultMessage="Workflow name"
        />
      ),
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.workflowList.titleDesc" defaultMessage="Description" />,
      dataIndex: 'describe',
      valueType: 'textarea',
    },
    {
      title: <FormattedMessage id="pages.workflowList.titleActive" defaultMessage="Is active" />,
      dataIndex: 'active',
      hideInForm: true,
      renderText: (val: boolean) => (val ? <CheckOutlined /> : <CloseOutlined />),
    },
    {
      title: <FormattedMessage id="pages.workflowList.trigger" defaultMessage="Trigger" />,
      dataIndex: 'trigger',
      hideInForm: true,
      valueEnum: {
        manual: {
          text: (
            <Tag color="orange">
              <FormattedMessage id="pages.workflowList.trigger.manual" defaultMessage="Manual" />
            </Tag>
          ),
          status: 'manual',
        },
        cron: {
          text: (
            <Tag color="blue">
              <FormattedMessage id="pages.workflowList.trigger.cron" defaultMessage="Cron" />
            </Tag>
          ),
          status: 'cron',
        },
      },
    },
    {
      title: (
        <FormattedMessage
          id="pages.workflowList.titleUpdatedAt"
          defaultMessage="Last scheduled time"
        />
      ),
      sorter: true,
      dataIndex: 'lastTriggerTimestamp',
      valueType: 'dateTime',
      renderFormItem: (item, { defaultRender, ...rest }, form) => {
        const status = form.getFieldValue('status');
        if (`${status}` === '0') {
          return false;
        }
        if (`${status}` === '3') {
          return (
            <Input
              {...rest}
              placeholder={intl.formatMessage({
                id: 'pages.searchTable.exception',
                defaultMessage: 'Please enter the reason for the exception!',
              })}
            />
          );
        }
        return defaultRender(item);
      },
    },
    {
      title: <FormattedMessage id="pages.common.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="run"
          onClick={() => {
            Modal.confirm({
              title: intl.formatMessage({
                id: 'pages.workflowList.confirmSchedule',
                defaultMessage: 'Confirm schedule now?',
              }),
              onOk: () => {
                workflowCreateSchedule({ uid: record.uid })
                  .then(() => {
                    message.info(
                      intl.formatMessage({
                        id: 'pages.workflowList.scheduleSuccess',
                      }),
                    );
                  })
                  .catch(() => {
                    message.error(
                      intl.formatMessage({
                        id: 'pages.workflowList.scheduleFailed',
                      }),
                    );
                  });
              },
            });
          }}
        >
          <FormattedMessage id="pages.workflowList.scheduleNow" defaultMessage="Schedule now" />
        </a>,
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          <FormattedMessage id="pages.searchTable.config" defaultMessage="Configuration" />
        </a>,
        <a
          key="dag"
          onClick={() => {
            navigate(`/workflow/${record.uid}/dag`, { replace: true });
          }}
        >
          <FormattedMessage id="pages.workflowList.dag" defaultMessage="DAG" />
        </a>,
        <a
          key="events"
          onClick={() => {
            setCurrentRow(record);
            showModal();
          }}
        >
          <FormattedMessage id="pages.common.events" defaultMessage="Events" />
        </a>,
        <a
          key="jobs"
          onClick={() => {
            setCurrentRow(record);
            showJobsModal();
          }}
        >
          <FormattedMessage id="pages.common.jobs" defaultMessage="Jobs" />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Workflow, API.PageParams>
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
          const msg = await workflowList();
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
          id: 'pages.workflowList.form.newWorkflow',
          defaultMessage: 'New workflow',
        })}
        width="400px"
        visible={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as API.Workflow);
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
                  id="pages.workflowList.ruleName"
                  defaultMessage="Workflow name is required"
                />
              ),
            },
          ]}
          width="md"
          name="name"
          placeholder={intl.formatMessage({
            id: 'pages.workflowList.form.name',
            defaultMessage: 'Workflow name',
          })}
        />
        <ProFormTextArea
          width="md"
          name="describe"
          placeholder={intl.formatMessage({
            id: 'pages.workflowList.form.describe',
            defaultMessage: 'Workflow describe',
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
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.uid && (
          <ProDescriptions<API.Workflow>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Workflow>[]}
          />
        )}
      </Drawer>
      <Modal
        title={<FormattedMessage id="pages.common.events" defaultMessage="Events" />}
        width={1500}
        visible={isModalVisible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        {currentRow?.uid && <EventList uid={currentRow?.uid} />}
      </Modal>
      <Modal
        title={<FormattedMessage id="pages.common.jobs" defaultMessage="Jobs" />}
        width={1500}
        visible={isJobsModalVisible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        {currentRow?.uid && <JobList uid={currentRow?.uid} />}
      </Modal>
    </PageContainer>
  );
};

export default WorkflowList;
