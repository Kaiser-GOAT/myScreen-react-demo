import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px, pieProps } from '../shared/px'
import ChartBasic from '../shared/chartBasic'

const Chart6 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let option = {
      ...pieProps,
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 7,
          center: ['50%', '55%'],
          radius: '60%',
          label: {
            color: '#97b9eb',
            formatter: (val) => {
              return `${val.value} \n ${Math.round(val.percent)}%`
            },
          },
          labelLine: {
            lineStyle: {
              color: '#97b9eb',
            },
            smooth: 0.1,
            length: px(15),
            length2: px(10),
          },
          data: [
            {
              value: 236,
              name: '不紧急',
              itemStyle: { color: '#01b3b3' },
              selected: true,
            },
            { value: 456, name: '紧急', itemStyle: { color: '#e15963' } },
          ],
        },
      ],
    }
    let myChart = echarts.init(divRef.current)
    myChart.setOption(option)
  }, [])
  return (
    <ChartBasic name="诉求紧急统计">
      <div className="chart" ref={divRef}></div>
    </ChartBasic>
  )
}

export default Chart6
