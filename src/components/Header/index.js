import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';

export default () => {
  return (
    <Menu
      style={{ lineHeight: 5 }}
      theme="dark"
      mode={'horizontal'}>
      <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/about">关于我们</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/news">新闻资讯</Link></Menu.Item>
      <Menu.Item key="4"><Link to="/categories">产品中心</Link></Menu.Item>
      <Menu.Item key="5"><Link to="/selection">协助选型</Link></Menu.Item>
      <Menu.Item key="7"><Link to="/download">资料下载</Link></Menu.Item>
      <Menu.Item key="8"><Link to="/contact">联系我们</Link></Menu.Item>
    </Menu>
  );
}
