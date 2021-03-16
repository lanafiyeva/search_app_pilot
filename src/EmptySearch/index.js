import React from 'react'
import { Row, Col, Divider } from 'antd'
import '../App.css'

const EmptySearch = () => {
  return (
    <>
      <Col span={24}>
        <div className="empty-search">
          <img src="/example-logo-png-transparent-empty.png"></img>
        </div>
      </Col>
    </>
  )
}

export default EmptySearch
