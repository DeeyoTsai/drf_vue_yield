<template>
  <div class="defectScatter">
    {{ selectedRow == null ? '{}' : selectedRow.url}}
    <!-- {{ selectedGinfoRows }} -->
    <apexchart
      
      height="500"
      type="scatter"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
/* eslint-disable */
import { userowClickStore } from '@/stores/rowClick.js'
import { mapState, mapActions } from 'pinia';
import axios from 'axios';

export default {
  name: "ScatterChart",
  data: function() {
    return {
      fetchedData: {},
      chartOptions: {
        chart: {
              height: 350,
              type: 'scatter',
              zoom: {
                enabled: true,
                type: 'xy'
              }
        },
        tooltip: {
          // custom: function({series, seriesIndex, dataPointIndex, w}) {
          //   return '<div class="arrow_box">' +
          //     '<span>' + series[seriesIndex] + '</span>' +
          //     '</div>'
          // }
          x:{

            
          },
          
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'lighten',
                    value: 0.15,
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'darken',
                    value: 0.35,
                }
            },
        },
        xaxis: {
              tickAmount: 13,
              min:0,
              max:1300,
              tooltip:{
                enabled:true
              },
              labels: {
                formatter: function(val) {
                  return parseFloat(val).toFixed(1)
                }
              },
              
        },
        yaxis: {
              tickAmount: 11,
              min:0,
              max:1100,

        },

      },

      series: []
    };
  },
  methods:{
    dataToChart(dt) {
      let pd_array = [];
      let dataForSeries = [];

      let formattedData = dt.map((e, i) =>{
        if (!(pd_array.includes(e.product))) {
          let pd_obj = {
            name:'',
            data:[]
          };
          console.log('push product', e.product);
          pd_array.push(e.product);
          pd_obj.name = e.product;
          let xpos = e.xpos/1000
          let ypos = parseFloat(e.ypos/1000).toFixed(1)
          pd_obj.data.push([xpos, ypos]);
          dataForSeries.push(pd_obj);
          // console.log(dataForSeries);
        }
        else {
          dataForSeries.forEach((elem, j) => {
            // console.log(elem);
            // console.log(j);
            if (e.product == elem.name){
              // console.log('already have product');
              // console.log(dataForSeries[j]);
              let xpos = e.xpos/1000
              let ypos = parseFloat(e.ypos/1000).toFixed(1)
              dataForSeries[j].data.push([xpos, ypos])
            }
          }); 
        }
      })
      return dataForSeries;
      // console.log(pd_array);
      
    },  
  },
  computed:{
    ...mapState(userowClickStore, ['selectedRow','RowGinfo','selectedGinfoRows'])
  },
  watch:{
    selectedGinfoRows(newRow,oldRow){
      if (newRow != null){
        this.series = this.dataToChart(newRow);

      }
    }
  },

};
</script>