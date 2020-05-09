import React from 'react';
import { Layout } from 'antd';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './index.less';

const { Content } = Layout;

export default (props) => {

  if (props.location.pathname === '/') {
    return (
      <div className={styles.normal}>
        {props.children}
      </div>
    );
  }

  return (
    <Layout className={styles.normal}>
      <Header/>
      <Content style={{ minHeight: '100%' }}>
        {props.children}
      </Content>
      <Footer/>
    </Layout>
  );
}
