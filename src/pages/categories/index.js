import { List, Card, Col, Row } from 'antd';
import { Link } from 'umi';
import cate_jsj from '@/assets/images/category/cate_jsj.png';
import cate_clct from '@/assets/images/category/cate_clct.png';
import cate_rhxt from '@/assets/images/category/cate_rhxt.png';
import cate_dzcl from '@/assets/images/category/cate_dzcl.png';
import cate_lxsjj from '@/assets/images/category/cate_lxsjj.png';
import cate_tbddg from '@/assets/images/category/cate_tbddg.PNG';
import cate_fjgj from '@/assets/images/category/cate_fjgj.png';
import cate_zhmj from '@/assets/images/category/cate_zhmj.png';
import React from 'react';

const { Meta } = Card;

export default () => {
  const categories = [{
    'id': 1,
    'img': cate_jsj,
    'title': '减速机',
  },
    {
      'id': 2,
      'img': cate_clct,
      'title': '齿轮齿条',
    },
    {
      'id': 3,
      'img': cate_rhxt,
      'title': '润滑系统',
    }, {
      'id': 4,
      'img': cate_dzcl,
      'title': '齿轮定制',
    }
    , {
      'id': 5,
      'img': cate_lxsjj,
      'title': '螺旋升降机',
    }
    , {
      'id': 6,
      'img': cate_tbddg,
      'title': '同步电动缸',
    },
    {
      'id': 7,
      'img': cate_zhmj,
      'title': '组合模组',
    },
    {
      'id': 8,
      'img': cate_fjgj,
      'title': '附件工具',
    },
  ];


  return (
    <Row style={{ marginTop: 20, padding: 10 }}>
      <Col xs={{ span: 24}} xl={{ span: 20, offset: 2 }}>
        <List
          grid={{
            gutter: [40, 48],
            xs: 2,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={categories}
          renderItem={category => (
            <List.Item>
              <Link to={`/categories/${category.id}`}>
                <Card
                  hoverable
                  size={'small'}
                  cover={<img alt={category.title} src={category.img}/>}
                >
                  <Meta title={category.title}/>
                </Card>
              </Link>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}
