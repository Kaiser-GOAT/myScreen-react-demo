import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px, columnProps } from '../shared/px'
import ChartBasic from '../shared/chartBasic'

const Chart1 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let option = {
      ...columnProps,
      legend: {
        x: 'right',
        y: 0,
        itemGap: px(10),
        itemHeight: px(8),
        itemWidth: px(12),
        textStyle: {
          fontSize: px(8),
          color: '#97b9eb',
        },
      },
      dataset: {
        source: [
          ['product', '受理工单数', '办理工单数', '结单率'],
          ['工单1', 2000, 1800, 1500],
          ['工单2', 1600, 2000, 1800],
          ['工单3', 1000, 1500, 1700],
          ['工单4', 1560, 2100, 1500],
          ['工单5', 2000, 1800, 1500],
          ['工单6', 1600, 2000, 1800],
        ],
      },
      series: [
        {
          type: 'bar',
          barGap: 0,
          barWidth: px(15),
          label: {
            show: true,
            position: 'top',
          },
          itemStyle: {
            normal: {
              color: '#03b2b3',
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
        },
        {
          type: 'bar',
          barGap: 0,
          barWidth: px(15),
          itemStyle: {
            normal: {
              color: '#3476fe',
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
          label: {
            show: true,
            position: 'top',
          },
        },
        {
          type: 'bar',
          barGap: 0,
          barWidth: px(15),
          itemStyle: {
            normal: {
              color: '#e05964',
              label: {
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
                show: true,
              },
            },
          },
          label: {
            show: true,
            position: 'top',
          },
        },
      ],
    }
    let myChart = echarts.init(divRef.current)
    myChart.setOption(option)
  }, [])
  return (
    <ChartBasic name="工单类型数据统计">
      <div className="chart" ref={divRef}></div>
    </ChartBasic>
  )
}
export default Chart1
