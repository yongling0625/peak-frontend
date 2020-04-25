import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Row, Col, List, Card } from 'antd';
import { Link } from 'umi';
const { Meta } = Card;

export default connect(({ products, loading }) => ({
  products: products.products,
  submitting: loading.effects['products/fetchProducts'],
}))(props => {

  const { dispatch, location, products } = props;

  const category = location.query.category;

  /**
   * constructor
   */
  useEffect(() => {
    dispatch({
      type: 'products/fetchProducts',
      payload: { category: category },
    });
  }, []);

  return (
    <Row style={{ marginTop: 20, padding: 10 }}>
      <Col xs={24} xl={{ span: 20, offset: 2 }}>
        <List
          grid={{
            gutter: [40, 24],
            xs: 3,
            sm: 3,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={products.records}
          renderItem={item => (
            <List.Item>
              <a target={'_blank'} href={item.pdf}>
                <Card
                  hoverable
                  size={'small'}
                  cover={<img alt={item.title} src={item.img}/>}
                >
                  <Meta title={item.title}/>
                </Card>
              </a>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
});
