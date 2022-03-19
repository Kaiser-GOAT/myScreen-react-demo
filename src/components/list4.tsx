import React, { useEffect, useRef, useState } from 'react'
import ChartBasic from '../shared/chartBasic'
import { px } from '../shared/px'

const LIST_HEIGHT = px(388)
const List4 = () => {
  const divRef = useRef(null)
  const [userData, setUserData] = useState([])
  const [switcher, setSwitcher] = useState(false)
  useEffect(() => {
    const data = []
    for (let index = 0; index < 100; index++) {
      data.push({
        content: '黄开森的大屏',
        value: Math.round(Math.random() * 1000),
      })
    }
    setUserData(data)
  }, [])
  useEffect(() => {
    let autoScroll
    if (!switcher) {
      autoScroll = setInterval(() => {
        const parent = divRef.current
        if (parent.scrollTop >= parent.scrollHeight - LIST_HEIGHT) {
          clearInterval(autoScroll)
          setSwitcher(true)
          parent.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          parent.scrollTo({ top: parent.scrollTop + px(2), behavior: 'smooth' })
        }
      }, 100)
    } else {
      setTimeout(() => {
        setSwitcher(false)
      }, 1000)
    }

    return () => {
      clearInterval(autoScroll)
    }
  }, [switcher])
  return (
    <ChartBasic name={<div>关键字统计</div>}>
      <div
        style={{
          height: px(25),
          display: 'flex',
          width: '100%',
          marginTop: px(20),
          padding: px(4),
          fontSize: px(8),
          borderBottom: '2px solid #0e245c',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>关键字</span>
        <span>受理工单数</span>
      </div>
      <div
        ref={divRef}
        className="list"
        style={{ overflow: 'auto', height: LIST_HEIGHT, fontSize: px(10) }}
      >
        {userData.length > 0 &&
          userData.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: px(4),
                }}
              >
                <span>{item.content}</span>
                <span>{item.value}</span>
              </div>
            )
          })}
      </div>
    </ChartBasic>
  )
}

export default List4
