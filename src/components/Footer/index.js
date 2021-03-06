import React from 'react';
import { Row, Col } from 'antd';
import weixin1 from '@/assets/images/weixin1.jpg';
import logo from '@/assets/images/logo.jpg';

export default () => {
  return (
    <Row style={{ backgroundColor: '#323232', color: '#f4f4f4', marginTop: 30 }}>
      <Col xs={{ span: 6, offset: 2 }} xl={{ span: 2, offset: 1 }} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}>
        <img src={logo} alt={''}/>
      </Col>
      <Col xs={16} xl={{ span: 5 }} style={{
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>
          <p>廊坊市广用自动化设备有限公司</p>
          <p>廊坊市广阳区春和花园南区8-2-202</p>
          <p>电话：0316-5176208</p>
        </div>
      </Col>
      <Col xs={24} xl={{ span: 7 }} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p>
          Copyright ©2020.GUANGYONG TECH
          <a href={'http://www.beian.miit.gov.cn/'}>冀ICP备17001268号</a>
        </p>
      </Col>
      <Col xs={{ span: 9, offset: 2 }} xl={{ span: 2, offset: 3 }} style={{ padding: 2 }}>
        <img src={weixin1} alt={''}/>
      </Col>
      <Col xs={{ span: 9, offset: 2 }} xl={{ span: 2, offset: 1 }} style={{ padding: 2 }}>
        <img src={weixin1} alt={''}/>
      </Col>
    </Row>
  );
}
