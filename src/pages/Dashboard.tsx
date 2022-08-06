import { userGetDashboard } from '@/services/flowline/user';
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
            title="工作流数量"
            extra="全部"
            tooltip="统计全部工作流数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.workflowAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="代码数量"
            extra="全部"
            tooltip="统计全部代码数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.codeAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="变量数量"
            extra="全部"
            tooltip="统计全部变量数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.variableAmount}</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="节点数量"
            extra="全部"
            tooltip="统计全部节点数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>{userDashBoardData?.workerAmount}</div>
          </ProCard>
        </Col>
      </Row>

      <h2 className={styles.lineTitle}>调度次数</h2>
      <Line {...config} />
    </PageContainer>
  );
};

export default Dashboard;
