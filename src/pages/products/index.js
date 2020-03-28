import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, List } from 'antd';
import styles from './index.less';
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
      <Col xs={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <List
          grid={{
            gutter: [16, 24],
            xs: 3,
            sm: 3,
            md: 4,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={products}
          renderItem={item => (
            <List.Item>
              <Link to={`/products/${item.id}`}>
                <img style={{ width: 90, height: 130 }} src={item.img} alt={item.title}/>
                <p>{item.title}</p>
              </Link>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
});
