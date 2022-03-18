import React, { useEffect, useRef, useState } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { columnProps, px } from '../shared/px'
import china from '../geo/china.json'
import ChartBasic from '../shared/chartBasic'
import { mapData } from '../geo/mapData'

const Chart2 = () => {
  const divRef = useRef(null)
  const chartRef = useRef(null)
  const [data, setData] = useState([
    10, 15, 20, 15, 20, 13, 12, 16, 19, 16, 18, 17, 12,
  ])
  useEffect(() => {
    console.log(data)
  }, [data])
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    // @ts-ignore
    echarts.registerMap('CN', china)
    myChart.setOption(
      createEchartsOptions({
        tooltip: {
          formatter: function (e) {
            for (let key in mapData) {
              if (key === e.name) {
                setData(mapData[key].data)
              }
            }
          },
          triggerOn: 'click',
        },
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
  useEffect(() => {
    let option = {
      ...columnProps,
      grid: {
        x: px(30),
        y: px(40),
        x2: px(10),
        y2: px(25),
      },
      xAxis: {
        ...columnProps.xAxis,
        type: 'category',
        data: [
          '钱塘区',
          '下城区',
          '萧山区',
          '滨江区',
          '余杭区',
          '西湖区',
          '临安区',
          '富阳区',
          '鹿城区',
          '瓯海区',
          '龙湾区',
          '上虞区',
          '柯桥区',
        ],
      },
      yAxis: {
        ...columnProps.yAxis,
        type: 'value',
      },
      legend: {
        x: 'left',
        // y: px(30),
        // orient: 'vertical',
        itemGap: px(10),
        itemHeight: px(8),
        itemWidth: px(12),
        textStyle: {
          fontSize: px(8),
          color: '#97b9eb',
        },
      },
      series: [
        {
          type: 'bar',
          name: '代结工单数',
          stack: 'total',
          barWidth: px(15),
          itemStyle: {
            normal: {
              color: '#e05f66',
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
          },
          emphasis: {
            focus: 'series',
          },
          data,
        },
        {
          name: '受理工单数',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: '#f49a5f',
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
          emphasis: {
            focus: 'series',
          },
          data,
        },
        {
          name: '处理工单数',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: '#3478ff',
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
          emphasis: {
            focus: 'series',
          },
          data,
        },
        {
          name: '办结工单数',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          itemStyle: {
            normal: {
              color: '#01c0c2',
              label: {
                show: true,
                color: '#97b9eb',
                fontSize: px(6),
                position: 'top',
              },
            },
          },
          emphasis: {
            focus: 'series',
          },
          data,
        },
      ],
    }
    let myChart = echarts.init(chartRef.current)
    myChart.setOption(option)
  }, [data])
  return (
    <ChartBasic name="事发区域数据统计">
      <div ref={divRef} style={{ height: px(250) }}></div>
      <div ref={chartRef} className="chart"></div>
    </ChartBasic>
  )
}
export default Chart2
