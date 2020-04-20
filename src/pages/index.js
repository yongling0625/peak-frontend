import React, { useRef, useState } from 'react';
import { Button, Row, Col, Typography, Divider, Carousel, Affix } from 'antd';
import { GlobalOutlined, GoldOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeCarousel from '@/components/Carousel';
import cate_jsj from '@/assets/images/category/cate_jsj.jpg';
import cate_clct from '@/assets/images/category/cate_clct.jpg';
import cate_lxsjj from '@/assets/images/category/cate_lxsjj.jpg';
import cate_dzcl from '@/assets/images/category/cate_dzcl.jpg';
import styles from './index.less';
import new01 from '@/assets/images/news/news01.png';

const { Title, Paragraph } = Typography;

export default () => {

  const carouselRef = useRef();
  const [headerStyle, setHeaderStyle] = useState({ display: 'none' });


  window.onscroll = function() {
    //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //scrollTop就是触发滚轮事件时滚轮的高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      setHeaderStyle({ display: 'none' });
    } else if (scrollTop > 10) {
      setHeaderStyle({ position: 'fixed', zIndex: 1, width: '100%' });
    }
  };

  const next_button =
    <Button shape="circle" icon={<ArrowRightOutlined/>}
            size={'large'}
            onClick={() => carouselRef.current.next()}/>;

  return (
    <>
      <div style={headerStyle}>
        <Header/>
      </div>
      <HomeCarousel/>
      <div style={{ padding: 50 }}>
        <Row>
          <Col>
            <Typography>
              <Title level={3}>公司简介</Title>
              <p className={styles.indent}>
                廊坊市广用自动化设备有限公司专业服务于自动化领域，从事自动化产品的技术支持和销售。公司本着为用户提供理想服务的原则，建立了优秀的销售队伍、完善的服务体系，为国内众多用户提供了优质的产品和良好的服务。
                近三十年多年来，工业自动化技术高速发展，促进了全球科技进步、产业提升。
              </p>
              <p className={styles.indent}>现如今，逐步从工业自动化向工业互联网、工业信息化、大数据发展，工业4.0的概念已经在导引新的产业格局。
                自动化、信息化的高速发展，让现代工业企业对人才的要求、需求和渴求同样提升到一个前所未有的高度。
              </p>
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col xs={24} xl={12} style={{
            color: '#f41d23',
          }}>
            <GlobalOutlined/><p>愿景</p>
            <p>成为最优秀的精密传动解决方案提供商</p>
          </Col>
          <Col xs={24} xl={12} style={{
            color: '#f41d23',
          }}>
            <GoldOutlined/>
            <p>使命</p>
            <p>聚焦客户需求、提供高效解决方案、创造最大价值、实现共同发展</p>
          </Col>
        </Row>
      </div>
      <div>
        <Button type="dashed" danger size={'large'}><a href={'/about'}>查看更多</a></Button>
      </div>

      <Divider/>

      <Carousel dots={false} ref={carouselRef}>
        <div>
          <Row>
            <Col xs={11} xl={6}>
              <img src={cate_jsj}/>
            </Col>
            <Col xs={11} xl={10} style={{
              backgroundColor: 'rgb(51, 51, 51)',
              color: '#f4f4f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div>
                <p>减速机</p>
                <p className={styles.indent}>
                  减速机产品是针对高性能的设备需求来设计，当需要将马达转速降低，输出扭矩提高且完整的将动力传送至应用端，这时您会需要我们的减速机来达成您的要求。
                </p>
                <Button type="dashed" ghost size={'large'}><a href={'/categories/1'}>查看更多</a></Button>
              </div>
            </Col>
            <Col xs={2} xl={2} style={{
              backgroundColor: 'rgb(51, 51, 51)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {next_button}
            </Col>
            <Col xs={0} xl={6}>
              <img src={cate_clct}/>
            </Col>
          </Row>
        </div>
        <div className={styles.categoryCarousel}>
          <Row>
            <Col xs={11} xl={6}>
              <img src={cate_clct}/>
            </Col>
            <Col xs={11} xl={10} style={{
              backgroundColor: '#89C3EB',
              color: '#f4f4f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div>
                <p>齿轮齿条</p>
                <p className={styles.indent}>
                  齿条的功能已经从单纯的位移或动力传输转换到精确定位。应用高精度齿条，即使没有光栅尺也能精确定位。APEX齿条是全世界唯一一个严格按照规范生产齿排的制造商。所有的品质规范都是为了达到：高定位精度、承受高扭矩、高速度且低噪音运转。APEX也是全世界唯一能自己设计和生产齿排、齿轮和减速机的领导品牌，并提供良好协调的高品质传动组件，以满足不同的工业需求。
                </p>
                <Button type="dashed" ghost size={'large'}><a href={'/categories/2'}>查看更多</a></Button>
              </div>
            </Col>
            <Col xs={2} xl={2} style={{
              backgroundColor: '#89C3EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {next_button}
            </Col>
            <Col xs={0} xl={6}>
              <img src={cate_lxsjj}/>
            </Col>
          </Row>
        </div>
        <div className={styles.categoryCarousel}>
          <Row>
            <Col xs={11} xl={6}>
              <img src={cate_lxsjj}/>
            </Col>
            <Col xs={11} xl={10} style={{
              backgroundColor: 'rgb(51, 51, 51)',
              color: '#f4f4f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div>
                <p>螺旋升降机</p>
                <p className={styles.indent}>
                  开发至今也已21年，深受各界的好评；为提升此项产品且未来公司也备有自组自产( 高
                  速螺纹旋削机)来因应客户行程长短不一要求；以快速製造、组装交货。本公司更依此提升生产效率、降低成本，并在外螺纹与内螺帽的组合上，得到低背隙的精度要求以达品质保证。
                </p>
                <Button type="dashed" ghost size={'large'}><a href={'/categories/3'}>查看更多</a></Button>
              </div>
            </Col>
            <Col xs={2} xl={2} style={{
              backgroundColor: 'rgb(51, 51, 51)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {next_button}
            </Col>
            <Col xs={0} xl={6}>
              <img src={cate_dzcl}/>
            </Col>
          </Row>
        </div>
        <div className={styles.categoryCarousel}>
          <Row>
            <Col xs={11} xl={6}>
              <img src={cate_dzcl}/>
            </Col>
            <Col xs={11} xl={10} style={{
              backgroundColor: '#89C3EB',
              color: '#f4f4f4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div>
                <p>定制齿轮</p>
                <p className={styles.indent}>
                  因应客户高品质的要求，从车床、铣床、磨床、滚齿、热处理，到最后的精密研磨制程，我们的持续努力已将齿轮产品推向世界最顶级的品质。公司先进的设备不但具有超精密的齿面加工能力，对于复杂多元的齿形变化及各种齿形修正都有特殊的加工技术。加工模数可从3.5~50。齿轮研磨精度可达世界最高DIN
                  1级。此外，对于金属材料，热处理及其他相关加工技术亦有长期深入的研究，配合多年来齿轮制造的实务经验与严格的品质监控系统，深信是您选购齿轮系列产品的最佳选择。
                </p>
                <Button type="dashed" ghost size={'large'}><a href={'/categories/4'}>查看更多</a></Button>
              </div>
            </Col>
            <Col xs={2} xl={2} style={{
              backgroundColor: '#89C3EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {next_button}
            </Col>
            <Col xs={0} xl={6}>
              <img src={cate_jsj}/>
            </Col>
          </Row>
        </div>
      </Carousel>

      <Divider/>

      <div><Title level={3}>产品资讯</Title></div>
      <div>
        <Row style={{ marginTop: 20 }}>
          <Col xs={10} xl={{ span: 4, offset: 2 }}>
            <Link to={'/news/1'}><img src={new01}/></Link>
          </Col>
          <Col xs={14} xl={16} style={{
            backgroundColor: '#89C3EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div>
              <div>
                <Link to={'/news/1'}><h1>关于行星减速机噪音的分析，你了解吗？</h1></Link>
              </div>
              <p className={styles.indent}>
                行星减速机是齿轮啮合运转，所以齿轮与齿轮的摩擦、与油封的摩擦、轴承的运转都会有噪音出现，所以每个减速机的制造厂家都有噪音值标准，正常情况下，噪音值在 80 分贝以内.
              </p>
              <Button type="dashed" ghost size={'large'}><a href={'/news/1'}>查看详细</a></Button>
            </div>
          </Col>
        </Row>
      </div>

      <Footer/>
    </>
  );
}
