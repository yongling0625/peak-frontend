import { Row, Col } from 'antd';
import weixin1 from '@/assets/images/weixin1.jpg';
import React from 'react';

export default () => {
  return (
    <Row style={{
      textAlign: 'center', backgroundColor: '#323232', color: '#f4f4f4', marginTop: 30, display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Col xs={24} xl={{ span: 8}}>
        <p>廊坊市广用自动化设备有限公司</p>
        <p>廊坊市广阳区春和花园南区8-2-202</p>
        <p>电话：0316-5176208</p>
      </Col>
      <Col xs={24} xl={{ span: 7}}>
        <p>Copyright ©2020.GUANGYONG TECH <a href={'http://www.beian.miit.gov.cn/'}>冀ICP备17001268号</a></p>
      </Col>
      <Col xs={{ span: 9, offset: 2}} xl={{ span: 2, offset: 3}}>
        <span>微信公众号</span>
        <img src={weixin1}/>
      </Col>
      <Col xs={{ span: 9, offset: 2}} xl={{ span: 2, offset: 1}}>
        <span>微信公众号</span>
        <img src={weixin1}/>
      </Col>
    </Row>
  );
}
