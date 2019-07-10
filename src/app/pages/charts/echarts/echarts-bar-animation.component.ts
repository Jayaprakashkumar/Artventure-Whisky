import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-bar-animation',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsBarAnimationComponent implements AfterViewInit, OnDestroy {
  @Input() graphData
  @Input() graphDataList

  options: any = {};
  themeSubscription: any;
  seriesData: any = []
  firstData: any = [];
  secondData : any = [];
  thirdData: any = [];
  
  constructor(private theme: NbThemeService) {
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const xAxisData = [];
      this.firstData = this.map_data(this.graphData, this.graphDataList[2]);
      this.secondData = this.map_data(this.graphData, this.graphDataList[3]); 
      this.thirdData = this.map_data(this.graphData, this.graphDataList[4]);
      // for (let i = 2; i < this.graphDataList.length; i++) {
      //   let obj = {
      //     name: this.graphDataList[i],
      //     type: 'line',
      //     data: this.map_data(this.graphData, this.graphDataList[i]),
      //     animationDelay: idx => idx * 10,
      //   }
      //   this.seriesData.push(obj);
      //   console.log(obj)
      // }


      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight, colors.infoLight, colors.warning],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        scales:{
          barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
        },
        legend: {
          // data: ['bar', 'bar2'],
          data: this.graphDataList,
          align: 'left',
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
         
          {
            data: this.map_data(this.graphData, this.graphDataList[0]),
            silent: false,
            axisTick: {
              alignWithLabel: false,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
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
                  let x = params.seriesData[0].dataIndex;
                  console.log(this.graphData[x]["Artwork_title"])
                  return (
                    params.value + " | " +this.graphData[x]["Artwork_title"] + (params.seriesData.length ? '：' + params.seriesData[0].data  : '') 
                  );
                },
              },
            },
          },
        ],
        yAxis: [
          {
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
        series: [
          {
            name: this.graphDataList[2],
            type: 'bar',
            data: this.firstData,
            animationDelay: idx => idx * 10,
          },
          {
            name: this.graphDataList[3],
            type: 'line',
            data: this.secondData,
            animationDelay: idx => idx * 10 + 100,
          },
          {
            name: this.graphDataList[4],
            type: 'line',
            data: this.thirdData,
            animationDelay: idx => idx * 10 + 100,
          },
        ],
        // series: this.seriesData,
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      };
console.log(this.options);
      // for (let i = 0; i < 100; i++) {
      //   xAxisData.push('Category ' + i);
      //   data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      //   data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      // }
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
