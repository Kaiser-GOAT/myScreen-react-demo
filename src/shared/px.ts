export const px = (n) => (n / 1413) * (window as any).pageWidth

export const columnProps = {
  tooltip: {
    trigger: 'item',
  },
  grid: {
    x: px(30),
    y: px(35),
    x2: 0,
    y2: px(25),
  },
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    axisLabel: {
      fontSize: px(8),
      interval: 0,
      textStyle: { color: '#97b9eb' },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0e235f',
      },
    },
  },
  yAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#0e235f',
      },
    },
    axisLabel: {
      fontSize: px(8),
      interval: 0,
      textStyle: { color: '#97b9eb' },
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#0e235f',
      },
    },
  },
}
export const pieProps = {
  legend: {
    x: 'right',
    y: 0,
    itemGap: px(5),
    itemHeight: px(8),
    itemWidth: px(8),
    textStyle: {
      fontSize: px(8),
      color: '#97b9eb',
    },
  },
}
