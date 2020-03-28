import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Row, Col, List, Typography } from 'antd';
import { Link } from 'umi';

const { Title } = Typography;

export default connect(({ download, loading }) => ({
  download: download.download,
  submitting: loading.effects['download/fetchDownloadFile'],
}))(props => {

  const { dispatch, download } = props;

  /**
   * constructor
   */
  useEffect(() => {
    dispatch({
      type: 'download/fetchDownloadFile',
    });
  }, []);


  return (
    <Row gutter={[32, 32]} style={{ marginTop: 20 }}>
      <Col xs={{ span: 20, offset: 2 }} xl={{ span: 16, offset: 4 }}>
        <List
          grid={{
            gutter: 16,
            column: 1,
          }}
          dataSource={download}
          renderItem={item => (
            <List.Item>
              <Title level={4}>{item.categoryName}</Title>
              <List
                grid={{
                  gutter: [24, 16],
                  xs: 3,
                  sm: 3,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 4,
                }}
                dataSource={item.products}
                renderItem={product => (
                  <List.Item>
                    <Link to={product.pdf}>
                      <img src={product.img} alt={product.title}/>
                      <p>{product.title}</p>
                    </Link>
                  </List.Item>
                )}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
});
