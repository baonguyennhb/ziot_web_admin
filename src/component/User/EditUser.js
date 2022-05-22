import React from 'react'
import { Form, Input, Button, Select } from 'antd';
const EdiUser = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <div>
      <div className='title-page-children'>Add User</div>
      <Form form={form}  layout="vertical" name="control-hooks" onFinish={onFinish} className='form-user'>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Role" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='btn-submit'>
            Submit
          </Button>
          <Button type="primary" htmlType="button" onClick={onReset} className='btn-reset'>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EdiUser