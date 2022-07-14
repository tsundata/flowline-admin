import { Line } from '@ant-design/plots';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  const { data, getData } = useModel('line');
  getData();

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
  };

  return (
    <PageContainer>
      <Row style={{ marginBottom: 20 }}>
        <Col span={6}>
          <ProCard title="默认尺寸" extra="extra" tooltip="这是提示" style={{ width: '95%' }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard title="默认尺寸" extra="extra" tooltip="这是提示" style={{ width: '95%' }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard title="默认尺寸" extra="extra" tooltip="这是提示" style={{ width: '95%' }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </ProCard>
        </Col>
        <Col span={6}>
          <ProCard title="默认尺寸" extra="extra" tooltip="这是提示" style={{ width: '95%' }}>
            <div>Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </ProCard>
        </Col>
      </Row>

      <Line {...config} />
    </PageContainer>
  );
};

export default Welcome;
