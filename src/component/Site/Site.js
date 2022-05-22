import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { FolderAddOutlined } from '@ant-design/icons'
import '../design.css'
const Site = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='header-page'>
        <div className='title-page'>Site management</div>
        <div className='insert'>
           <Button type='primary' className='btn-insert' onClick ={() => navigate('/site/add')}><FolderAddOutlined/>Add Site</Button>
        </div>
      </div>
    </div>
  )
}

export default Site