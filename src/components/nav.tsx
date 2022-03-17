import React from 'react'
import './nav.scss'

export const RightNav = (props) => {
  return (
    <a className="a" href="https://www.baidu.com" target="_blank">
      {props.children}
    </a>
  )
}

export const LeftNav = (props) => {
  return (
    <a className="b" href="https://www.baidu.com" target="_blank">
      {' '}
      {props.children}
    </a>
  )
}
