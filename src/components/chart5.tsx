import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px, columnProps } from '../shared/px'
import ChartBasic from '../shared/chartBasic'

const Chart5 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let option = {
      ...columnProps,
      xAxis: {
        ...columnProps.xAxis,
        data: [
          '民政',
          '城市建设',
          '影视动漫',
          '教课文卫',
          '城市管理',
          '交通',
          '环保',
          '公共安全',
          '清洁',
          '公积金',
        ],
      },
      series: [
        {
          type: 'bar',
          barGap: 0,
          barWidth: px(18),
          data: [2600, 2500, 2350, 2300, 2200, 2100, 2050, 1800, 1700, 1650],
          label: {
            show: true,
            position: 'top',
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 1, color: '#0052f2' },
                { offset: 0, color: '#00a9ff' },
              ]),
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
        },
      ],
    }
    let myChart = echarts.init(divRef.current)
    myChart.setOption(option)
  }, [])
  return (
    <ChartBasic name="诉求类型数据统计">
      <div className="chart" ref={divRef}></div>
    </ChartBasic>
  )
}

export default Chart5
