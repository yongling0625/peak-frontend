import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import new01 from '@/assets/images/news01.jpg';
import new02 from '@/assets/images/news02.jpg';

const { Title, Paragraph } = Typography;

export default () => {
  return (
    <div>
      <div>
        <img src={new01}/>
      </div>
      <div>
        <Row style={{marginTop: 20}}>
          <Col xs={10} xl={4}>
            <img src={new02}/>
          </Col>
          <Col xs={14} xl={20}>
            <Typography>
              <Title level={4}>聊城市委副书记、代市长李长萍一行莅临公司参观指导</Title>
              <Paragraph>
                廊坊市广用自动化设备有限公司专业服务于自动化领域，从事自动化产品的技术支持和销售。公司本着为用户提供理想服务的原则，建立了优秀的销售队伍、完善的服务体系，为国内众多用户提供了优质的产品和良好的服务。
              </Paragraph>
            </Typography>
          </Col>
        </Row>
      </div>
    </div>
  );
}
