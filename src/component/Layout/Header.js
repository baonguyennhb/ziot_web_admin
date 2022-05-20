import React from 'react'
import { Layout, Col, Row, Avatar } from 'antd'
const { Header } = Layout
const HeaderPage = () => {
  return (
    <Header style={{background:'green'}}>
      <Row>
        <Col span={22}>
          <label style={{color: 'white', fontSize: '20px', fontWeight:600}}>ZIOT ADMIN</label>
        </Col>
        <Col span={2}>
          <label style={{color: 'white', marginRight: '15px'}}>Hi Admin !!!</label>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>A</Avatar>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderPage