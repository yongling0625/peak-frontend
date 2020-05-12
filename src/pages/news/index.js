import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { Link } from 'umi';
import newsheader from '@/assets/images/news/newsheader.jpg';
import new01 from '@/assets/images/news/news01.png';

const { Title, Paragraph } = Typography;

export default () => {
  return (
    <div>
      <div>
        <img src={newsheader} alt={''}/>
      </div>
      <div>
        <Row style={{marginTop: 20}}>
          <Col xs={10} xl={{span:4 ,offset: 2}}>
            <Link to={'/news/1'}><img src={new01} alt={''}/></Link>
          </Col>
          <Col xs={14} xl={16}>
            <Typography>
              <Link to={'/news/1'}><Title level={4}>关于行星减速机噪音的分析，你了解吗？</Title></Link>
              <Paragraph>
                行星减速机是齿轮啮合运转，所以齿轮与齿轮的摩擦、与油封的摩擦、轴承的运转都会有噪音出现，所以每个减速机的制造厂家都有噪音值标准，正常情况下，噪音值在 80 分贝以内.
              </Paragraph>
            </Typography>
            <Button type="dashed" size={'large'}><a href={'/news/1'}>查看详细</a></Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
