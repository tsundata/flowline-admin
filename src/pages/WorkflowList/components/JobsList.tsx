import EventList from '@/components/Events';
import { jobList } from '@/services/flowline/job';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Modal, Tag } from 'antd';
import React, { useRef, useState } from 'react';
import { DagState } from './DagState';

interface IProps {
  uid: string | undefined;
}

const JobList: React.FC<IProps> = (props) => {
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Job>();

  React.useEffect(() => {
    actionRef.current?.reload();
  }, [props.uid]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDagModalVisible, setIsDagModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const showDagModal = () => {
    setIsDagModalVisible(true);
  };
  const handleClose = () => {
    setCurrentRow(undefined);
    setIsModalVisible(false);
    setIsDagModalVisible(false);
  };

  const columns: ProColumns<API.Job>[] = [
    {
      title: <FormattedMessage id="pages.common.uid" defaultMessage="UID" />,
      dataIndex: 'uid',
      tip: 'The uid is the unique key',
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
      dataIndex: 'completionTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.common.creationTimestamp" defaultMessage="Created time" />,
      dataIndex: 'creationTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.common.titleOption" defaultMessage="Operating" />,
      dataIndex: 'option',
      valueType: 'option',
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
        <a
          key="dag"
          onClick={() => {
            setCurrentRow(record);
            showDagModal();
          }}
        >
          <FormattedMessage id="pages.workflowList.dagState" defaultMessage="Dag state" />
        </a>,
      ],
    },
  ];

  return (
    <div>
      <ProTable<API.Job, API.PageParams>
        rowKey="uid"
        search={false}
        actionRef={actionRef}
        request={async () => {
          const msg = await jobList({ uid: props.uid! });
          return {
            data: msg.items,
            success: true,
          };
        }}
        columns={columns}
      />
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
        title={<FormattedMessage id="pages.common.events" defaultMessage="Events" />}
        width={1500}
        visible={isDagModalVisible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        {currentRow?.workflowUID && (
          <DagState meta={{ flowId: currentRow?.workflowUID, jobUID: currentRow?.uid }} />
        )}
      </Modal>
    </div>
  );
};

export default JobList;
