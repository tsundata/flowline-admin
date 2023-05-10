import EventList from '@/components/Events';
import { stageList } from '@/services/flowline/stage';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import { PageContainer, ProDescriptions, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Drawer, Modal, Tag } from 'antd';
import React, { useRef, useState } from 'react';
import styles from './index.less';

const StageList: React.FC = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<API.Stage>();

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

  const columns: ProColumns<API.Stage>[] = [
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
      title: <FormattedMessage id="pages.stageList.name" defaultMessage="Stage name" />,
      dataIndex: 'name',
    },
    {
      title: <FormattedMessage id="pages.stageList.uids" defaultMessage="UIDs" />,
      width: 500,
      // @ts-ignore
      render: (dom, entity) => {
        return (
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>WorkerUID</td>
                <td>{entity.workerUID}</td>
              </tr>
              <tr>
                <td>WorkflowUID</td>
                <td>{entity.workflowUID}</td>
              </tr>
              <tr>
                <td>JobUID</td>
                <td>{entity.jobUID}</td>
              </tr>
              <tr>
                <td>DagUID</td>
                <td>{entity.dagUID}</td>
              </tr>
              <tr>
                <td>NodeID</td>
                <td>{entity.nodeID}</td>
              </tr>
            </tbody>
          </table>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.common.state" defaultMessage="State" />,
      dataIndex: 'state',
      renderText: (val: string) => (
        <Tag color={val == 'failed' ? 'orange' : val == 'success' ? 'green' : 'blue'}>{val}</Tag>
      ),
    },
    {
      title: <FormattedMessage id="pages.stageList.code" defaultMessage="Code" />,
      width: 500,
      // @ts-ignore
      render: (dom, entity) => {
        return (
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Runtime</td>
                <td>{entity.runtime}</td>
              </tr>
              <tr>
                <td>CodeUID</td>
                <td>{entity.code}</td>
              </tr>
              <tr>
                <td>Connections</td>
                <td>{entity.connections}</td>
              </tr>
              <tr>
                <td>Variables</td>
                <td>{entity.variables}</td>
              </tr>
              <tr>
                <td>Input</td>
                <td>{entity.input}</td>
              </tr>
              <tr>
                <td>Output</td>
                <td>{entity.output}</td>
              </tr>
            </tbody>
          </table>
        );
      },
    },
    {
      title: <FormattedMessage id="pages.stageList.dependNodeId" defaultMessage="Depend NodeId" />,
      dataIndex: 'dependNodeId',
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
      <ProTable<API.Stage, API.PageParams>
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
          const msg = await stageList();
          return {
            data: msg.items,
            success: true,
          };
        }}
        columns={columns}
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
          <ProDescriptions<API.Stage>
            column={2}
            title={currentRow?.uid}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.uid,
            }}
            columns={columns as ProDescriptionsItemProps<API.Stage>[]}
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

export default StageList;
