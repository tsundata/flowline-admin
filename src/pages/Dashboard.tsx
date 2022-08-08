import { userGetDashboard } from '@/services/flowline/user';
import { useIntl } from '@@/exports';
import type { LineConfig } from '@ant-design/plots';
import { Line } from '@ant-design/plots';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './Dashboard.less';

const Dashboard: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [userDashBoardData, setUserDashBoardData] = React.useState<API.Dashboard>();
  const [config, setConfig] = React.useState<LineConfig>({
    data: [],
    xField: 'date',
    yField: 'schedule',
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  });

  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */
  const intl = useIntl();

  React.useEffect(() => {
    const uid = initialState!.currentUser!.uid!;
    userGetDashboard({ uid: uid }).then((res) => {
      setUserDashBoardData(res);
      setConfig({
        // @ts-ignore
        data: res.data,
        xField: 'date',
        yField: 'schedule',
        xAxis: {
          tickCount: 5,
        },
        smooth: true,
      });
    });
  }, [initialState]);

  return (
    <PageContainer>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6}>
          <ProCard
            title={intl.formatMessage({ id: 'pages.dashboard.count.workflow' })}
            extra={intl.formatMessage({ id: 'pages.dashboard.all' })}
            tooltip={intl.formatMessage({ id: 'pages.dashboard.count.workflow.tip' })}
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.workflowAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title={intl.formatMessage({ id: 'pages.dashboard.count.code' })}
            extra={intl.formatMessage({ id: 'pages.dashboard.all' })}
            tooltip={intl.formatMessage({ id: 'pages.dashboard.count.code.tip' })}
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.codeAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title={intl.formatMessage({ id: 'pages.dashboard.count.variable' })}
            extra={intl.formatMessage({ id: 'pages.dashboard.all' })}
            tooltip={intl.formatMessage({ id: 'pages.dashboard.count.variable.tip' })}
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.variableAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title={intl.formatMessage({ id: 'pages.dashboard.count.worker' })}
            extra={intl.formatMessage({ id: 'pages.dashboard.all' })}
            tooltip={intl.formatMessage({ id: 'pages.dashboard.count.worker.tip' })}
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.workerAmount}</div>
          </ProCard>
        </Col>
      </Row>

      <h2 className={styles.lineTitle}>
        {intl.formatMessage({ id: 'pages.dashboard.scheduleNumber' })}
      </h2>
      <Line {...config} />
    </PageContainer>
  );
};

export default Dashboard;
