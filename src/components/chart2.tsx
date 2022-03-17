import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px'
import china from '../geo/china.json'
import ChartBasic from '../shared/chartBasic'

const Chart2 = () => {
  const divRef = useRef(null)
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    // @ts-ignore
    echarts.registerMap('CN', china)
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            label: { show: false, color: 'white' },
            itemStyle: {
              areaColor: '#010D3D',
              borderColor: '#01A7F7',
              emphasis: {
                label: { color: 'white' },
                areaColor: '#5470C6',
              },
            },
          },
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            itemStyle: {
              areaColor: '#010D3D',
              borderColor: 'yellow',
              emphasis: {
                label: { color: 'white' },
                areaColor: '#5470C6',
              },
            },
          },
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            itemStyle: {
              areaColor: '#010D3D',
              emphasis: {
                label: { color: 'white' },
              },
            },
          },
        ],
      })
    )
  }, [])

  return (
    <ChartBasic name="事发区域数据统计">
      <div ref={divRef} style={{ height: px(304) }}></div>
    </ChartBasic>
  )
}
export default Chart2
