import React from 'react'
import { Layout, Col, Row, Avatar } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import './layout.css'
const { Header } = Layout
const HeaderPage = () => {
  return (
    <Header style={{ background: '#eb8334' }}>
      <Row>
        <Col span={20}>
          <div className={'iconsolar'}></div>
          <label style={{ color: 'white', fontSize: '18px', fontWeight: 650, position:'absolute', top:'0px' }}>ZIOT ADMIN</label>
        </Col>
        <Col span={4}>
          <label style={{ color: 'white', marginRight: '15px' }}>Hi Admin !!!</label>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>
          <div style={{ marginLeft: '15px', display:'inline-block', color:'white', position:'absolute', top:'2px', fontSize:'25px' }}>
            <SettingOutlined />
          </div>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderPage