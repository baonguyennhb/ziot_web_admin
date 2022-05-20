import React from 'react';

import { Layout } from 'antd';

import SideMenu from './SideMenu';
import HeaderPage from './Header';

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  console.log(children)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderPage />
      <Layout>
        <SideMenu />
        <Content style={{ margin: '20px 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
