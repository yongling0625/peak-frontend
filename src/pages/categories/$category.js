import React from 'react';
import { Row, Col, Card, Button, List } from 'antd';
import { Link } from 'umi';
import { DownOutlined } from '@ant-design/icons';
import cate_jsj from '@/assets/images/category/cate_jsj.jpg';
import cate_clct from '@/assets/images/category/cate_clct.jpg';


export default props => {

  const category = props.match.params.category;

  let category_title;
  let category_img;
  let category_feature;

  const jsj_feature = ['任意方向使用', '易于安装', '高转入转速', '高输出扭矩密度', '低背隙', '免维护', '较低噪音', '较低震动', '使用寿命长', '优良之抗性'];
  const clct_feature = ['高精密度', '高负载', '高速度', '低噪音', '长使用寿命', '快速交货'];

  switch (category) {
    case '1':
      category_title = '减速机';
      category_img = cate_jsj;
      category_feature = jsj_feature;
      break;
    case '2':
      category_title = '齿轮齿条';
      category_img = cate_clct;
      category_feature = clct_feature;
      break;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Row gutter={[24, 8]}>
        <Col xs={{ span: 18, offset: 3 }} xl={{ span: 5, offset: 5 }}>
          <Card title={`${category_title}特色`}>
            <List
              size={'small'}
              dataSource={category_feature}
              renderItem={cf => (
                <List.Item>
                  {cf}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} xl={9}>
          <img src={category_img}/>
        </Col>
      </Row>
      <div style={{ marginTop: 20 }}>
        <Button>
          <Link to={`/products?category=${category}`}>产品列表 <DownOutlined/> </Link>
        </Button>
      </div>
    </div>
  );
}
