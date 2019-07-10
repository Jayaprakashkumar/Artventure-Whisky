import { Component, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-multiple-xaxis',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsMultipleXaxisComponent implements AfterViewInit, OnDestroy {
  @Input() dataList
  @Input() graphData

  options: any = {};
  themeSubscription: any;
  serialData: any = [];

  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      for (let i = 1; i < this.dataList.length; i++) {
        let obj = {
          'name': this.dataList[i],
          'type': 'line',
          // 'xAxisIndex': i,
            'smooth': true,
          'data': this.map_data(this.graphData, this.dataList[i]),
        }
        this.serialData.push(obj);
      }

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.success, colors.info, colors.danger, colors.warning],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {
          // data: ['Artist % Change', 'Market % Change'],
          data: this.dataList,
          textStyle: {
            color: echarts.textColor,
          },
        },
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.info,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  console.log(params);
                  return (
                     params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '') +'%'
                  );
                },
              },
            },
            data: this.map_data(this.graphData, this.dataList[0]),
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors.success,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
            axisPointer: {
              label: {
                formatter: params => {
                  return (
                    params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : '')
                  );
                },
              },
            },
            data: this.map_data(this.graphData, this.dataList[0])
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: this.serialData,
      };
    });
  }

  map_data(arr: any, key: string) {
    return arr.map((val: any) => {
      return val[key]
    })
  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
