import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { WindowFormComponent } from './window-form/window-form.component';

@Component({
  selector: 'ngx-window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.scss'],
})
export class WindowComponent {

  artistDataList : any = ["Year", "artistPerChange", "marketPerChange"]
  artistGraphData:{Year:any, artistPerChange:any, marketPerChange: any}[]=[
    {
      "Year": 2007,
      "artistPerChange": "",
      "marketPerChange": ""
    },
    {
      "Year": 2008,
      "artistPerChange": "-17.21",
      "marketPerChange": "-5.92"
    },
    {
      "Year": 2009,
      "artistPerChange": "3.68",
      "marketPerChange": "-36.29"
    },
    {
      "Year": 2010,
      "artistPerChange": "35.66",
      "marketPerChange": "44.30"
    },
    {
      "Year": 2011,
      "artistPerChange": "-37.21",
      "marketPerChange": "13.33"
    },
    {
      "Year": 2012,
      "artistPerChange": "56.20",
      "marketPerChange": "-12.23"
    },
    {
      "Year": 2013,
      "artistPerChange": "-6.98",
      "marketPerChange": "11.64"
    },
    {
      "Year": 2014,
      "artistPerChange": "25.41",
      "marketPerChange": "7.74"
    },
    {
      "Year": 2015,
      "artistPerChange": "-13.18",
      "marketPerChange": "-6.45"
    },
    {
      "Year": 2016,
      "artistPerChange": "-1.40",
      "marketPerChange": "-10.82"
    },
    {
      "Year": 2017,
      "artistPerChange": "-14.00",
      "marketPerChange": "11.95"
    },
    {
      "Year": 2018,
      "artistPerChange": "92.56",
      "marketPerChange": "2.04"
    }
   ]

   altInvestmentDataList =["Year", "SP500", "Gold", "FTSE100", "AlexKatz"];
   altInvestmentGraphData:{Year:number, SP500:string, Gold:string, FTSE100:string, AlexKatz:string}[] =[
      {
        "Year": 2002,
        "SP500": "-14.63",
        "Gold": "17.60",
        "FTSE100": "-22.04",
        "AlexKatz": "-50.21"
      },
      {
        "Year": 2003,
        "SP500": "-21.43",
        "Gold": "21.74",
        "FTSE100": "6.48",
        "AlexKatz": "47.31"
      },
      {
        "Year": 2004,
        "SP500": "26.42",
        "Gold": "8.86",
        "FTSE100": "7.44",
        "AlexKatz": "-51.00"
      },
      {
        "Year": 2005,
        "SP500": "4.32",
        "Gold": "18.12",
        "FTSE100": "17.01",
        "AlexKatz": "98.70"
      },
      {
        "Year": 2006,
        "SP500": "8.24",
        "Gold": "35.14",
        "FTSE100": "11.05",
        "AlexKatz": "29.49"
      },
      {
        "Year": 2007,
        "SP500": "11.37",
        "Gold": "16.01",
        "FTSE100": "5.41",
        "AlexKatz": "6.76"
      },
      {
        "Year": 2008,
        "SP500": "-3.19",
        "Gold": "20.23",
        "FTSE100": "-32.59",
        "AlexKatz": "-17.21"
      },
      {
        "Year": 2009,
        "SP500": "-37.22",
        "Gold": "19.90",
        "FTSE100": "22.19",
        "AlexKatz": "3.68"
      },
      {
        "Year": 2010,
        "SP500": "29.81",
        "Gold": "17.20",
        "FTSE100": "10.58",
        "AlexKatz": "35.66"
      },
      {
        "Year": 2011,
        "SP500": "14.15",
        "Gold": "33.36",
        "FTSE100": "-6.47",
        "AlexKatz": "-37.21"
      },
      {
        "Year": 2012,
        "SP500": "1.40",
        "Gold": "-5.45",
        "FTSE100": "6.48",
        "AlexKatz": "56.20"
      },
      {
        "Year": 2013,
        "SP500": "13.83",
        "Gold": "-5.47",
        "FTSE100": "12.86",
        "AlexKatz": "-10.50"
      },
      {
        "Year": 2014,
        "SP500": "23.10",
        "Gold": "-18.23",
        "FTSE100": "-0.22",
        "AlexKatz": "30.34"
      },
      {
        "Year": 2015,
        "SP500": "11.29",
        "Gold": "-6.44",
        "FTSE100": "-4.53",
        "AlexKatz": "-13.18"
      },
      {
        "Year": 2016,
        "SP500": "-5.40",
        "Gold": "4.96",
        "FTSE100": "10.79",
        "AlexKatz": "-1.40"
      },
      {
        "Year": 2017,
        "SP500": "18.58",
        "Gold": "-1.32",
        "FTSE100": "7.77",
        "AlexKatz": "-14.00"
      },
      {
        "Year": 2018,
        "SP500": "22.62",
        "Gold": "-1.49",
        "FTSE100": "-7.17",
        "AlexKatz": "92.56"
      }
   ]












  // @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  // @ViewChild('disabledEsc', { read: TemplateRef }) disabledEscTemplate: TemplateRef<HTMLElement>;

  // constructor(private windowService: NbWindowService) {}

  // openWindow(contentTemplate) {
  //   this.windowService.open(
  //     contentTemplate,
  //     {
  //       title: 'Window content from template',
  //       context: {
  //         text: 'some text to pass into template',
  //       },
  //     },
  //   );
  // }

  // openWindowForm() {
  //   this.windowService.open(WindowFormComponent, { title: `Window` });
  // }

  // openWindowWithoutBackdrop() {
  //   this.windowService.open(
  //     this.disabledEscTemplate,
  //     {
  //       title: 'Window without backdrop',
  //       hasBackdrop: false,
  //       closeOnEsc: false,
  //     },
  //   );
  // }
}
