import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Col, Row, Carousel, Typography, Button, Divider, Tabs } from 'antd';
import _ from 'lodash';

const { Paragraph, Title } = Typography;
const { TabPane } = Tabs;

export default connect(({ products, loading }) => ({
  product: products.product,
  submitting: loading.effects['products/fetchProduct'],
}))(props => {

  const { dispatch, match, product } = props;
  const productId = match.params.product;

  /**
   * constructor
   */
  useEffect(() => {
    dispatch({
      type: 'products/fetchProduct',
      payload: { productId: productId },
    });
  }, []);


  return (
    <div>

      <Row style={{ marginTop: 20, padding: 10 }}>
        <Col xs={24} xl={{ span: 16, offset: 4 }}>
          <Carousel autoplay={true} autoplaySpeed={3000}>
            {
              product.categoryImgList && _.map(product.categoryImgList, img => {
                return (
                  <div key={_.uniqueId()}>
                    <img src={img} alt={''}/>
                  </div>
                );
              })
            }
          </Carousel>
        </Col>
      </Row>
      <Row style={{ marginTop: 20, padding: 10 }}>
        <Col xs={24} xl={{ span: 16, offset: 4 }}>
          <div style={{ textAlign: 'left' }}>
            <Title>{product.title}</Title>
            <Paragraph>{product.synopsis}</Paragraph>
            <Paragraph>型号：{product.model}</Paragraph>
            <Paragraph>品牌：{product.brand}</Paragraph>
            <Paragraph>货期：{product.deliveryType}</Paragraph>
            <Paragraph>服务：{product.afterSaleService}</Paragraph>
          </div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, xl: 16 }} style={{ marginTop: 20, padding: 10 }}>
        <Col xs={12} xl={{ span: 8, offset: 4 }}>
          <Button type="primary" block href={'/selection'} ghost>立即咨询</Button>
        </Col>
        <Col xs={12} xl={{ span: 8 }}>
          <Button type="primary" block href={'tel:13292669905'}>拨打电话</Button>
        </Col>
      </Row>
      <Divider/>
      <Tabs defaultActiveKey="1" type="card" size={'large'} tabBarGutter={40}>
        <TabPane tab="产品特点" key="1">
          <Row>
            <Col xs={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
              {
                product.featuresImgList && _.map(product.featuresImgList, img =>
                  <img src={img} alt={''}/>,
                )
              }
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="详细规格" key="2">
          <Row>
            <Col xs={{ span: 22, offset: 1 }} xl={{ span: 16, offset: 4 }}>
              {
                product.specificationsImgList && _.map(product.specificationsImgList, img =>
                  <img src={img} alt={''}/>,
                )
              }
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="产品尺寸" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </div>
  );
});
