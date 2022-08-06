import { eventListKind } from '@/services/flowline/event';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Tag } from 'antd';
import React, { useRef } from 'react';

interface IProps {
  uid: string | undefined;
}

const EventList: React.FC<IProps> = (props) => {
  const actionRef = useRef<ActionType>();

  React.useEffect(() => {
    actionRef.current?.reload();
  }, [props.uid]);

  const columns: ProColumns<API.Event>[] = [
    {
      title: <FormattedMessage id="pages.common.uid" defaultMessage="UID" />,
      dataIndex: 'uid',
      tip: 'The uid is the unique key',
    },
    {
      title: <FormattedMessage id="pages.eventList.name" defaultMessage="Event name" />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.common.state" defaultMessage="Type" />,
      dataIndex: 'type',
      renderText: (val: string) => <Tag color="blue">{val}</Tag>,
    },
    {
      title: <FormattedMessage id="pages.eventList.reason" defaultMessage="Reason" />,
      dataIndex: 'reason',
    },
    {
      title: <FormattedMessage id="pages.eventList.message" defaultMessage="Message" />,
      dataIndex: 'message',
    },
    {
      title: <FormattedMessage id="pages.eventList.note" defaultMessage="Note" />,
      dataIndex: 'note',
    },
    {
      title: <FormattedMessage id="pages.eventList.count" defaultMessage="Count" />,
      dataIndex: 'count',
    },
    {
      title: <FormattedMessage id="pages.eventList.source" defaultMessage="Source" />,
      dataIndex: 'source',
      renderText: (source: API.EventSource) =>
        `${source.component ? source.component : ''} ${source.host ? source.host : ''}`,
    },
    {
      title: <FormattedMessage id="pages.eventList.firstTimestamp" defaultMessage="First time" />,
      dataIndex: 'firstTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.eventList.lastTimestamp" defaultMessage="Last time" />,
      dataIndex: 'lastTimestamp',
      valueType: 'dateTime',
    },
    {
      title: <FormattedMessage id="pages.eventList.eventTime" defaultMessage="Event time" />,
      dataIndex: 'eventTime',
      valueType: 'dateTime',
    },
  ];

  return (
    <ProTable<API.Event, API.PageParams>
      rowKey="uid"
      search={false}
      actionRef={actionRef}
      request={async () => {
        const msg = await eventListKind({ uid: props.uid! });
        return {
          data: msg.items,
          success: true,
        };
      }}
      columns={columns}
    />
  );
};

export default EventList;
