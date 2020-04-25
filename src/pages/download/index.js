import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Row, Col, List, Typography } from 'antd';

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

  function showPdf(product) {
    if (product.pdf) {
      return (
        <List.Item>
          <a target={'_blank'} href={product.pdf}>
            <img src={product.img} alt={product.title}/>
            <p>{product.title}</p>
          </a>
        </List.Item>
      );
    } else {
      return (
        <List.Item>
          <img src={product.img} alt={product.title}/>
          <p>{product.title}</p>
        </List.Item>
      );
    }
  }


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
              <Title level={2}>{item.categoryName}</Title>
              <List
                grid={{
                  gutter: [48, 16],
                  xs: 3,
                  sm: 3,
                  md: 4,
                  lg: 4,
                  xl: 4,
                  xxl: 4,
                }}
                dataSource={item.products}
                renderItem={product => (
                  showPdf(product)
                )}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
});
