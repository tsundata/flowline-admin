import EventList from '@/components/Events';
import { workerList } from '@/services/flowline/worker';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { PageContainer, ProDescriptions, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Drawer, Modal, Tag } from 'antd';
import React, { useRef, useState } from 'react';

const WorkerList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Worker>();

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

  const columns: ProColumns<API.Worker>[] = [
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
      title: <FormattedMessage id="pages.workerList.name" defaultMessage="Worker name" />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.common.state" defaultMessage="State" />,
      dataIndex: 'state',
      renderText: (val: string) => (
        <Tag color={val == 'no_ready' ? 'orange' : val == 'ready' ? 'green' : 'blue'}>{val}</Tag>
      ),
    },
    {
      title: <FormattedMessage id="pages.workerList.hostname" defaultMessage="Hostname" />,
      dataIndex: 'hostname',
    },
    {
      title: <FormattedMessage id="pages.workerList.runtimes" defaultMessage="Runtimes" />,
      dataIndex: 'runtimes',
      renderText: (val: string[]) => `${val.join(', ')}`,
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
          key="events"
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
      <ProTable<API.Worker, API.PageParams>
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
          const msg = await workerList();
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
          <ProDescriptions<API.Worker>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Worker>[]}
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

export default WorkerList;
