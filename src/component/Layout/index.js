import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout,  Breadcrumb} from 'antd';

import SideMenu from './SideMenu';
import HeaderPage from './Header';
import  Footer  from './Footer';

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  const location = useLocation()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderPage />
      <Layout>
        <SideMenu />
        <Content style={{ margin: '10px 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{(location.pathname).replace('/','')}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 15, minHeight: '90%' }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
