import React, { useEffect, useRef } from 'react'

const ChartBasic = ({ name, children }) => {
  return (
    <React.Fragment>
      <h5 className="text">{name}</h5>
      {children}
    </React.Fragment>
  )
}

export default ChartBasic
