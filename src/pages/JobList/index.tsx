import EventList from '@/components/Events';
import { jobList } from '@/services/flowline/job';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { PageContainer, ProDescriptions, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Drawer, Modal, Tag } from 'antd';
import React, { useRef, useState } from 'react';

const JobList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Job>();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setCurrentRow(undefined);
    setIsModalVisible(false);
  };

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  const columns: ProColumns<API.Job>[] = [
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
      title: <FormattedMessage id="pages.jobList.name" defaultMessage="Job name" />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.common.state" defaultMessage="State" />,
      dataIndex: 'state',
      renderText: (val: string) => <Tag color="blue">{val}</Tag>,
    },
    {
      title: <FormattedMessage id="pages.jobList.workflowUID" defaultMessage="Workflow UID" />,
      dataIndex: 'workflowUID',
    },
    {
      title: (
        <FormattedMessage id="pages.jobList.completionTimestamp" defaultMessage="Completion time" />
      ),
      sorter: true,
      dataIndex: 'completionTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.common.creationTimestamp" defaultMessage="Created time" />,
      sorter: true,
      dataIndex: 'creationTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.common.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
      width: 100,
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            setCurrentRow(record);
            showModal();
          }}
        >
          <FormattedMessage id="pages.common.events" defaultMessage="Events" />
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.Job, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.common.tableTitle',
          defaultMessage: 'Enquiry form',
        })}
        actionRef={actionRef}
        rowKey="uid"
        search={{
          labelWidth: 120,
        }}
        request={async () => {
          const msg = await jobList();
          return {
            data: msg.items,
            success: true,
          };
        }}
        columns={columns}
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
          <ProDescriptions<API.Job>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Job>[]}
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
    </PageContainer>
  );
};

export default JobList;
