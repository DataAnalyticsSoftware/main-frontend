export const getOptionsLineChart = (dinamicOption: any, origin, destination) => {
    
    dinamicOption.xAxis.data = dinamicOption.xAxis.data.slice(origin, destination + 1)
    dinamicOption.legend.data = dinamicOption.legend.data.map(x => x || 'No Data')
    dinamicOption.series.forEach((x) => {x.data = x.data.slice(origin,destination + 1); x.name = x.name === null ? 'No Data': x.name;})
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