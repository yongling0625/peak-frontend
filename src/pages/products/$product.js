import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import {  Col, Row, Pagination } from 'antd';
import { Document, Page } from 'react-pdf';

export default connect(({ products, loading }) => ({
  product: products.product,
  submitting: loading.effects['products/fetchProduct'],
}))(props => {

  const { dispatch, match, product } = props;
  const productId = match.params.product;

  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

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
    <Row style={{ marginTop: 20, padding: 10 }}>
      <Col xs={24} xl={{span:12, offset:6}}>
        <p>
          <Pagination simple current={pageNumber} total={numPages}
                      onChange={(page) => setPageNumber(page)}/>
        </p>
        <div>
          <Document
            file={product.pdf}
            onLoadSuccess={pdf => setNumPages(pdf.numPages)}
          >
            <Page pageNumber={pageNumber}/>
          </Document>
        </div>
        <p style={{ marginTop: 20 }}>
          <Pagination simple current={pageNumber} total={numPages}
                      onChange={(page) => setPageNumber(page)}/>
        </p>
      </Col>
    </Row>
  );
});
