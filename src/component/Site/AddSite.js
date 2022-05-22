import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import  { useNavigate} from 'react-router-dom'
const AddSite = () => {
    const navigate = useNavigate()
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
    navigate('/site')
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <div>
      <div className='title-page-children'>Add Station</div>
      <Form form={form}  layout="vertical" name="control-hooks" onFinish={onFinish} className='form-user'>
        <Form.Item name="name" label="Ten tram" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="Describe" label="Mo ta" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Gia dien" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="currency" label="Don vi tien te" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="unit_price_cd" label="Gia dien cao diem" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="unit_price_td" label="Gia dien thap diem" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="unit_price_bt" label="Gia dien binh thuong" rules={[{ required: true }]}>
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

export default AddSite