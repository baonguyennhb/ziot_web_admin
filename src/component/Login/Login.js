import React from 'react'
import { Input, Checkbox, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import './login.css'
const Login = () => {
  return (
    <div className='login'>
      <div className='container-login'>
        <div className='title-login'>Welcome to Solar Admin System</div>
        <div className='box-input'>
          <div className='item-input'>
            <Input className='input' size="large" placeholder="Username" prefix={<UserOutlined />} />
          </div>
          <div className='item-input'>
            <Input className='input' size="large" placeholder="Username" prefix={<KeyOutlined />} />
          </div>
        </div>
        <div className='box-info'>
          <Checkbox className='checkbox'>Keep me logged in</Checkbox>
          <label>Forgot pass word</label>
        </div>
        <div className='box-login'>
          <Button type="primary" style={{width:'160px', height:'45px', borderRadius:'15px', fontSize:'20px'}}>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default Login