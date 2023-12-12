export const getOptionsLineChart = (dinamicOption: any, origin: number, destination: number, filterType: string[]) => {
    
    dinamicOption.xAxis.data = dinamicOption.xAxis.data.slice(origin, destination + 1)
    dinamicOption.series = filterType.length > 0 ? dinamicOption.series.filter(x => filterType.includes(x.name)) : dinamicOption.series
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