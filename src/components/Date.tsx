import React, { useEffect, useRef, useState } from 'react'
import { px } from '../shared/px'

const DateTime: React.FC = () => {
  const [date, setDate] = useState<any>()
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date().toLocaleString().replace(/\//g, '-'))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div style={{ fontSize: px(13), color: '#345499' }}>{date}</div>
}

export default DateTime
