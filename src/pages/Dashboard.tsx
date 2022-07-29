import { Line } from '@ant-design/plots';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './Dashboard.less';

const Dashboard: React.FC = () => {
  const { data } = useModel('line');

  const config = {
    data,
    xField: 'Date',
    yField: 'schedule',
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  };

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
            <div className={styles.number}>32</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="代码数量"
            extra="全部"
            tooltip="统计全部代码数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>51</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="变量数量"
            extra="全部"
            tooltip="统计全部变量数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>20</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard
            title="连接数量"
            extra="全部"
            tooltip="统计全部连接数量"
            style={{ width: '95%' }}
          >
            <div className={styles.number}>8</div>
          </ProCard>
        </Col>
      </Row>

      <h2 className={styles.lineTitle}>
        调度次数 <span>(2022.01.01 ~ 2022.12.01)</span>
      </h2>
      <Line {...config} />
    </PageContainer>
  );
};

export default Dashboard;
