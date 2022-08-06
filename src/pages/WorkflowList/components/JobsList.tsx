import { jobList } from '@/services/flowline/job';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Tag } from 'antd';
import React, { useRef } from 'react';

interface IProps {
  uid: string | undefined;
}

const JobList: React.FC<IProps> = (props) => {
  const actionRef = useRef<ActionType>();

  React.useEffect(() => {
    actionRef.current?.reload();
  }, [props.uid]);

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
  ];

  return (
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
  );
};

export default JobList;
