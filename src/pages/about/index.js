import { Row, Col, Typography } from 'antd';
import image01 from '@/assets/images/image01.jpg';
import React from 'react';

const { Title, Paragraph } = Typography;

export default () => {
  return (
    <div>
      <div>
        <img src={image01}/>
      </div>
      <Row style={{ marginTop: 20 }}>
        <Col xs={{ span: 22, offset: 1 }} xl={{ span: 14, offset: 5 }}>
          <Typography>
            <Title>公司简介</Title>
            <Paragraph>
              廊坊市广用自动化设备有限公司专业服务于自动化领域，从事自动化产品的技术支持和销售。公司本着为用户提供理想服务的原则，建立了优秀的销售队伍、完善的服务体系，为国内众多用户提供了优质的产品和良好的服务。
            </Paragraph>
            <Paragraph>
              近三十年多年来，工业自动化技术高速发展，促进了全球科技进步、产业提升。现如今，逐步从工业自动化向工业互联网、工业信息化、大数据发展，工业4.0的概念已经在导引新的产业格局。
              自动化、信息化的高速发展，让现代工业企业对人才的要求、需求和渴求同样提升到一个前所未有的高度。
            </Paragraph>
            <Paragraph>
              公司服务的领域涵盖了航空航天、机器人、数控机床、专用机械、仪器仪表等众多行业，并与业内众多知名厂家及科研机构、大专院校建立了长期、稳定的良好合作关系。
            </Paragraph>
            <Paragraph>
              公司主营产品：CNC车铣复合、高精密减速机、齿轮齿条、单伺服动力刀塔、多功能机械手、扭力扳手等
            </Paragraph>
          </Typography>
        </Col>
      </Row>
    </div>
  );
}
