import React from 'react';
import { Row, Col, Typography } from 'antd';

import new01 from '@/assets/images/news/news01.png';
import new02 from '@/assets/images/news/news02.png';
import new03 from '@/assets/images/news/news03.png';
import new04 from '@/assets/images/news/news04.png';
import new05 from '@/assets/images/news/news05.png';
import new06 from '@/assets/images/news/news06.png';

const { Title, Paragraph } = Typography;

export default () => {
  return (
    <div style={{padding:10}}>
      <Typography>
        <Title level={2}>关于行星减速机噪音的分析，你了解吗？</Title>
        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new01} alt={''}/>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              行星减速机是齿轮啮合运转，所以齿轮与齿轮的摩擦、与油封的摩擦、轴承的运转都会有噪音出现，所以每个减速机的制造厂家都有噪音值标准，正常情况下，噪音值在 80 分贝以内，那我们分析一下非正常噪音值的发生情况：
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new02} alt={''}/>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              （1） 减速机本身的问题，即齿轮的精度和轴承的精度以及部件间的装配问题，导致齿轮之间无法顺畅啮合。
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new03} alt={''}/>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              （2）搭配电机和减速机配合的平行度/垂直度不够，导致减速机运转时同心度不够，偏心运转，使齿轮和轴承不均匀受力（分别测量电机和减速机的配合结构部分）。
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new04} alt={''}/>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              （3）搭配电机和减速机的安装不当（未按照减速机的安装行为规范执行）。
            </Paragraph>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new05} alt={''}/>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              （4）减速机的输入孔处受到电机输出轴的压迫，导致贴面摩擦。
            </Paragraph>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xl={{ span: 4, offset: 10 }}>
            <img src={new06} alt={''}/>
          </Col>
        </Row>

        <Row>
          <Col xs={24} xl={{ span: 12, offset: 6 }}>
            <Paragraph strong={true}>
              （5）运转周期较长，出现正常的机械磨损（齿轮磨损/轴承磨损），导致减速机的
              回程间隙过大，出现运转抖动情况。
              APEX 减速机噪音值测试是在温度25 度，输入端 3000rpm 下测得。
              距离 1 米处测量噪音值分贝。
              润滑油不均匀时，让减速机正常运转润滑油均匀后,异声自然消除。
              标准安装减速机及电机(参考马达安装说明书)，请垂直安装电机先锁紧马达锁紧套后再锁紧马达，这样同轴度会比较好、噪音低。
              如果水平安装时,连接板与电机均有公差值会造成同轴度(同心度)安装不好时运转噪音大,所以请标准安装减速机及电机且请参阅扭力建议表。
              齿轮与齿轮摩擦,齿轮背隙越小噪音值越大 P0>P1>P2。
            </Paragraph>
          </Col>
        </Row>
      </Typography>
    </div>
  )
    ;
}
