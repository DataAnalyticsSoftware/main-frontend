export const getOptionsLineChart = (dinamicOption: any, origin, destination) => {
    
    dinamicOption.xAxis.data = dinamicOption.xAxis.data.slice(origin, destination + 1)
    dinamicOption.series.forEach((x) => x.data = x.data.slice(origin,destination + 1))
    return {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        yAxis: {
          type: 'value'
        },
        ...dinamicOption
      }
}