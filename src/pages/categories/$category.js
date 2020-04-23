import React from 'react';
import { Row, Col, Card, Button, List } from 'antd';
import { Link } from 'umi';
import { DownOutlined } from '@ant-design/icons';
import cate_jsj from '@/assets/images/category/cate_jsj.png';
import cate_clct from '@/assets/images/category/cate_clct.png';
import cate_rhxt from '@/assets/images/category/cate_rhxt.jpg';
import cate_dzcl from '@/assets/images/category/cate_dzcl.png';
import cate_lxsjj from '@/assets/images/category/cate_lxsjj.png';
import cate_tbddg from '@/assets/images/category/cate_tbddg.jpg';
import cate_fjgj from '@/assets/images/category/cate_fjgj.png';
import cate_zhmj from '@/assets/images/category/cate_zhmj.jpg';


export default props => {

  const category = props.match.params.category;

  let category_title;
  let category_img;
  let category_feature;

  const jsj_feature = ['任意方向使用', '易于安装', '高转入转速', '高输出扭矩密度', '低背隙', '免维护', '较低噪音', '较低震动', '使用寿命长', '优良之抗性'];
  const clct_feature = ['高精密度', '高负载', '高速度', '低噪音', '长使用寿命', '快速交货'];
  const rhxt_feature = ['CE与ATEX认证', '最多支援40个润滑点', '支援间歇润滑模式', '支援手控器与PLC控制模式', '润滑模式记忆功能', '液位侦测与电路自我保护功能'];
  const dzcl_feature = ['齿轮研磨精度可达最高DIN1级', '加工模数3.5-50'];
  const fjgj_feature = ['满足ANSI及DIN等国际标准', '耐磨耗', '多种方式可选、可定制'];
  const lxsjj_feature = ['体积小', '安装方便', '噪音低', '寿命长'];
  const tbddg_feature = ['精确的速度控制', '精确的位置控制', '精确的力控制'];
  const zhmz_feature = ['可根据客户需求定制'];

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

    case '3':
      category_title = '润滑系统';
      category_img = cate_rhxt;
      category_feature = rhxt_feature;
      break;

    case '4':
      category_title = '齿轮定制';
      category_img = cate_dzcl;
      category_feature = dzcl_feature;
      break;
    case '5':
      category_title = '螺旋升降机';
      category_img = cate_lxsjj;
      category_feature = lxsjj_feature;
      break;
    case '6':
      category_title = '同步电动缸';
      category_img = cate_tbddg;
      category_feature = tbddg_feature;
      break;
    case '7':
      category_title = '附件工具';
      category_img = cate_fjgj;
      category_feature = fjgj_feature;
      break;
    case '8':
      category_title = '组合模组';
      category_img = cate_zhmj;
      category_feature = zhmz_feature;
      break;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Row gutter={[24, 8]}>
        <Col xs={{ span: 18, offset: 3 }} xl={{ span: 5, offset: 5 }}>
          <Card
            title={`${category_title}特色`}
            hoverable
            headStyle={{backgroundColor: '#ABAAAB'}}
            bodyStyle={{backgroundColor: '#F4C3BC'}}
          >
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
        <Button type="primary" shape="round">
          <Link to={`/products?category=${category}`}>产品列表 <DownOutlined/> </Link>
        </Button>
      </div>
    </div>
  );
}
