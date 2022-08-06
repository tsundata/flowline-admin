import { eventList } from '@/services/flowline/event';
import { useIntl } from '@@/exports';
import {
  ActionType,
  PageContainer,
  ProColumns,
  ProDescriptions,
  ProDescriptionsItemProps,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage } from '@umijs/max';
import { Drawer, Tag } from 'antd';
import React, { useRef, useState } from 'react';

const EventList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Job>();

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

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
    <PageContainer>
      <ProTable<API.Event, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.common.tableTitle',
          defaultMessage: 'Enquiry form',
        })}
        rowKey="uid"
        search={{
          labelWidth: 120,
        }}
        actionRef={actionRef}
        request={async () => {
          const msg = await eventList();
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
    </PageContainer>
  );
};

export default EventList;
