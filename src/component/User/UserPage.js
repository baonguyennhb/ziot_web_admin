import React, { useEffect} from 'react'
import { Table, Space } from 'antd'
import { FolderAddOutlined } from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { GetAllUser } from '../../api/UserApi'
import '../design.css'
import './user.css'
import { Button } from 'antd'
const UserPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    GetAllUser(dispatch)
  },[])
  const listUser = useSelector((state) => state.user?.users)
  console.log(listUser)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Active',
      dataIndex: 'is_active',
      key: 'is_active',
    },
    {
      title: 'Create At',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a>Detail</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className='header-page'>
        <div className='title-page'>User management</div>
        <div className='insert'>
           <Button type='primary' className='btn-insert' onClick ={() => navigate('/user/add')}><FolderAddOutlined/>Add User</Button>
        </div>
      </div>
      <div className='container-table'>
        <Table columns={columns} dataSource={listUser} bordered/>;
      </div>
    </div>


  )
}

export default UserPage