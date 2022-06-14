import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Input, Checkbox, Button, Form, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import { loginUser } from '../../api/AuthAPI';
import { loginInitiate } from '../../features/Auth/redux/action';
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const error = useSelector((state) => state.auth.login?.error)
  const {user, error} = useSelector((state) => state.auth)
  console.log(user)
  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error])
  // useEffect(() => {
  //   if(user) {
  //     navigate('/user')
  //   }
  // },[user])
  const onFinish = (values) => {
    let email = values.email
    let password = values.password
    // const user_login = {
    //   email: values.email,
    //   password: values.password

    // }
    //loginUser(user_login, dispatch, navigate)
    dispatch(loginInitiate(email, password))
  }
  return (
    <div className='login'>
      <div className='container-login'>
        <div className='title-login'>Welcome to Solar Admin System</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login