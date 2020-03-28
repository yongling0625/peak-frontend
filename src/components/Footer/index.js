import { Layout, Row, Col } from 'antd';

import logo from '@/assets/images/logo.png'

const { Footer } = Layout;

export default () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <Row>
        <Col span={12}>
          {/*<div><img src={logo}/></div>*/}
          <p>廊坊市广用自动化设备有限公司</p>
          <p>廊坊市广阳区春和花园南区8-2-202</p>
          <p>电话：0316-5176208</p>
        </Col>
        <Col span={12}>
          <p>Copyright ©2020.GUANGYONG TECH   <a href={'http://www.beian.miit.gov.cn/'}>冀ICP备17001268号</a></p>
        </Col>
      </Row>
    </Footer>
  );
}
