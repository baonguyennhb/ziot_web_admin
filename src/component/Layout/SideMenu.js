import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme= "light">
      <div className="logo" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/user']}
      >
        <Menu.Item key="/user">
          <HomeOutlined />
          <span>User</span>
          <Link to="/user"></Link>
        </Menu.Item>

        <Menu.Item key="/site">
          <TeamOutlined />
          <span>Site</span>
          <Link to="/site"></Link>
        </Menu.Item>

        <Menu.Item key="/device">
          <DashboardOutlined />
          <span>Device</span>
          <Link to="/device"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;
