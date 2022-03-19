import { DatePicker } from 'antd'
import React from 'react'
import { LeftNav, RightNav } from '../components/nav'
import DateTime from '../components/Date'

const header = () => {
  return (
    <div className="header">
      <div className="datePicker">
        <DateTime />
      </div>
      <div className="navWrapper">
        <div style={{ display: 'flex' }}>
          <LeftNav>专题分析</LeftNav>
          <LeftNav>专题分析</LeftNav>
          <LeftNav>专题分析</LeftNav>
        </div>
        <div className="title">
          <div className="titleSquare"></div>
        </div>
        <div className="navMirror">黄开森的大屏</div>
        <div style={{ display: 'flex' }}>
          <RightNav>承办单位统计</RightNav>
          <RightNav>承办单位统计</RightNav>
          <RightNav>承办单位统计</RightNav>
        </div>
      </div>
    </div>
  )
}

export default header
