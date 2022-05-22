import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
const {Option} = Select
const AddUser = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
    navigate('/user')
  };
  const SelectRole = () => {

  }
  return (
    <div>
      <div className='title-page-children'>Add User</div>
      <Form form={form} layout="vertical" name="control-hooks" onFinish={onFinish} className='form-user'>
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
          <Select
            placeholder="Select a option Role"
            onChange={SelectRole}
            allowClear
          >
            <Option value="EN">Engineer</Option>
            <Option value="AD">Admin</Option>
            <Option value="US">User</Option>
          </Select>
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='btn-submit'>
            Submit
          </Button>
          <Button type="primary" htmlType="button" onClick={onReset} className='btn-reset'>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddUser