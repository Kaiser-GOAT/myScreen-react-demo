import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px, pieProps } from '../shared/px'
import ChartBasic from '../shared/chartBasic'

let data = [
  { value: 1365, name: '蓝牌', itemStyle: { color: '#339ae5' } },
  { value: 156, name: '红牌', itemStyle: { color: '#e7536b' } },
  { value: 206, name: '黄牌', itemStyle: { color: '#d9c701' } },
  { value: 412, name: '橙牌', itemStyle: { color: '#f38051' } },
]
const Chart3 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    let sum = 0
    let max = 0
    data.forEach((item) => {
      sum += item.value
      if (item.value >= max) max = item.value
    })
    let number = Math.round(max * 0.5)
    let showData = data.map((item) => {
      return { ...item, value: number + item.value }
    })
    let option = {
      ...pieProps,
      tooltip: {
        trigger: 'item',
        formatter: function (param) {
          return param.name + ':' + (param.value - number)
        },
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
      },
      series: [
        {
          type: 'pie',
          center: ['50%', '55%'],
          radius: ['30%', '70%'],
          data: showData.sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          label: {
            color: '#97b9eb',
          },
          labelLine: {
            lineStyle: {
              color: '#97b9eb',
            },
            smooth: 0.2,
            length: 0,
            length2: 10,
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          },
        },
      ],
    }
    let myChart = echarts.init(divRef.current)
    myChart.setOption(option)
  }, [])
  return (
    <ChartBasic name="监察工单数据统计">
      <div className="chart" ref={divRef}></div>
    </ChartBasic>
  )
}

export default Chart3
