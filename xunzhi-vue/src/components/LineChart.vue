<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme


export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
     
      chartData: {
        visitsData: [],
        ipData: []
      },
      weekDays: []
    }
  },
  mounted() {
    
    //getChartData().then(res => {
    const get_res={"weekDays":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"ipData":[145,146,162,155,153,81,49],"visitsData":[230,236,227,210,222,155,58]}

      this.chartData.visitsData = get_res.visitsData
      this.chartData.ipData = get_res.ipData
      this.weekDays = get_res.weekDays
      this.initChart()
    //})
    
    
  },
 
  methods: {
   
    setOptions({ visitsData, ipData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: this.weekDays,
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['visits', 'ip']
        },
        series: [{
          name: 'visits', itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: visitsData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'ip',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: ipData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
