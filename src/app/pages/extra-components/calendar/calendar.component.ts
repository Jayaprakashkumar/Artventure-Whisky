import { Component } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import { DayCellComponent } from './day-cell/day-cell.component';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['calendar.component.scss'],
  entryComponents: [DayCellComponent],
})
export class CalendarComponent {

  whiskyData :{img:any, name:string, year:string, price:string}[] = [

    {
      "img" : "../../../../assets/images/whisky1.jpg",
      "name":"Macallan Wisky 1",
      "year":"25 Aug 2019",
      "price":"$ 2500"
    },
    
    {
      "img" : "../../../../assets/images/whisky2.jpg",
      "name":"Macallan Wisky 2",
      "year":"14 May 2019",
      "price":"$ 14,000"
    },
    
    {
      "img" : "../../../../assets/images/whisky3.jpg",
      "name":"Macallan Wisky 3",
      "year":"8 June 2019",
      "price":"$ 800"
    }
  ]

  avgHammerPriceList = ["Year", "Average_hammer_price","Average_low_price"]
   avgHammerPriceData :{Year:number, Average_hammer_price:string,  Average_low_price:string}[] = [
    {
      "Year": 2000,
      "Average_hammer_price": "0.09",
      "Average_low_price": "1.34"
    },
    {
      "Year": 2001,
      "Average_hammer_price": "0.18",
      "Average_low_price": "3.54"
    },
    {
      "Year": 2002,
      "Average_hammer_price": "0.51",
      "Average_low_price": "3.32"
    },
    {
      "Year": 2003,
      "Average_hammer_price": "0.51",
      "Average_low_price": "3.18"
    },
    {
      "Year": 2004,
      "Average_hammer_price": "0.99",
      "Average_low_price": "3.15"
    },
    {
      "Year": 2005,
      "Average_hammer_price": "0.99",
      "Average_low_price": "3.34"
    },
    {
      "Year": 2006,
      "Average_hammer_price": "1.71",
      "Average_low_price": "5.47"
    },
    {
      "Year": 2007,
      "Average_hammer_price": "3.08",
      "Average_low_price": "7.98"
    },
    {
      "Year": 2008,
      "Average_hammer_price": "1.15",
      "Average_low_price": "6.21"
    },
    {
      "Year": 2009,
      "Average_hammer_price": "1.85",
      "Average_low_price": "4.45"
    },
    {
      "Year": 2010,
      "Average_hammer_price": "1.44",
      "Average_low_price": "5.66"
    },
    {
      "Year": 2011,
      "Average_hammer_price": "2.77",
      "Average_low_price": "6.34"
    },
    {
      "Year": 2012,
      "Average_hammer_price": "1.40",
      "Average_low_price": "3.72"
    },
    {
      "Year": 2013,
      "Average_hammer_price": "2.47",
      "Average_low_price": "6.12"
    },
    {
      "Year": 2014,
      "Average_hammer_price": "3.07",
      "Average_low_price": "5.70"
    },
    {
      "Year": 2015,
      "Average_hammer_price": "6.98",
      "Average_low_price": "7.96"
    },
    {
      "Year": 2016,
      "Average_hammer_price": "11.02",
      "Average_low_price": "8.37"
    },
    {
      "Year": 2017,
      "Average_hammer_price": "31.38",
      "Average_low_price": "10.37"
    }
   ]

   prodYrList = ["Production_Year", "Average_price"];
   productionYrData: { Production_Year: number, Average_price: number }[] = [
     {
       "Production_Year": 1946,
       "Average_price": 17000
     },
     {
       "Production_Year": 1950,
       "Average_price": 25053.2
     },
     {
       "Production_Year": 1951,
       "Average_price": 12175
     },
     {
       "Production_Year": 1953,
       "Average_price": 60000
     },
     {
       "Production_Year": 1954,
       "Average_price": 17250
     },
     {
       "Production_Year": 1955,
       "Average_price": 16800
     },
     {
       "Production_Year": 1956,
       "Average_price": 35000
     },
     {
       "Production_Year": 1957,
       "Average_price": 250916.6667
     },
     {
       "Production_Year": 1958,
       "Average_price": 104666.6667
     },
     {
       "Production_Year": 1959,
       "Average_price": 61000
     },
     {
       "Production_Year": 1960,
       "Average_price": 63126.5
     },
     {
       "Production_Year": 1961,
       "Average_price": 46000
     },
     {
       "Production_Year": 1962,
       "Average_price": 76125
     },
     {
       "Production_Year": 1963,
       "Average_price": 18750
     },
     {
       "Production_Year": 1964,
       "Average_price": 35214.28571
     },
     {
       "Production_Year": 1965,
       "Average_price": 48787.5
     },
     {
       "Production_Year": 1966,
       "Average_price": 39066.66667
     },
     {
       "Production_Year": 1967,
       "Average_price": 94709.09091
     },
     {
       "Production_Year": 1968,
       "Average_price": 65559.1
     },
     {
       "Production_Year": 1969,
       "Average_price": 94414.33333
     },
     {
       "Production_Year": 1970,
       "Average_price": 23743.66667
     },
     {
       "Production_Year": 1971,
       "Average_price": 139200
     },
     {
       "Production_Year": 1972,
       "Average_price": 146500
     },
     {
       "Production_Year": 1973,
       "Average_price": 59281
     },
     {
       "Production_Year": 1974,
       "Average_price": 107426.1875
     },
     {
       "Production_Year": 1975,
       "Average_price": 151062.5
     },
     {
       "Production_Year": 1976,
       "Average_price": 95771.66667
     },
     {
       "Production_Year": 1977,
       "Average_price": 56833.33333
     },
     {
       "Production_Year": 1978,
       "Average_price": 83923.36364
     },
     {
       "Production_Year": 1979,
       "Average_price": 51812.5
     },
     {
       "Production_Year": 1980,
       "Average_price": 68853.81818
     },
     {
       "Production_Year": 1981,
       "Average_price": 66812.83333
     },
     {
       "Production_Year": 1982,
       "Average_price": 68432.22222
     },
     {
       "Production_Year": 1983,
       "Average_price": 48704.2
     },
     {
       "Production_Year": 1984,
       "Average_price": 121833.3333
     },
     {
       "Production_Year": 1985,
       "Average_price": 108949.3333
     },
     {
       "Production_Year": 1986,
       "Average_price": 87674.18182
     },
     {
       "Production_Year": 1987,
       "Average_price": 142964.5
     },
     {
       "Production_Year": 1988,
       "Average_price": 99283.42857
     },
     {
       "Production_Year": 1989,
       "Average_price": 47986.66667
     },
     {
       "Production_Year": 1990,
       "Average_price": 110080.1111
     },
     {
       "Production_Year": 1991,
       "Average_price": 45189.72727
     },
     {
       "Production_Year": 1992,
       "Average_price": 66989.83333
     },
     {
       "Production_Year": 1993,
       "Average_price": 87471.14286
     },
     {
       "Production_Year": 1994,
       "Average_price": 66435.58333
     },
     {
       "Production_Year": 1995,
       "Average_price": 60625.66667
     },
     {
       "Production_Year": 1996,
       "Average_price": 59176
     },
     {
       "Production_Year": 1997,
       "Average_price": 39258.09091
     },
     {
       "Production_Year": 1998,
       "Average_price": 60622.6
     },
     {
       "Production_Year": 1999,
       "Average_price": 168823.8182
     },
     {
       "Production_Year": 2000,
       "Average_price": 108466.5
     },
     {
       "Production_Year": 2001,
       "Average_price": 48496.5
     },
     {
       "Production_Year": 2002,
       "Average_price": 94901.26667
     },
     {
       "Production_Year": 2003,
       "Average_price": 161375.1333
     },
     {
       "Production_Year": 2004,
       "Average_price": 168001.6667
     },
     {
       "Production_Year": 2005,
       "Average_price": 83343.45455
     },
     {
       "Production_Year": 2006,
       "Average_price": 66563.83333
     },
     {
       "Production_Year": 2007,
       "Average_price": 73769.71429
     },
     {
       "Production_Year": 2008,
       "Average_price": 109664.5
     },
     {
       "Production_Year": 2009,
       "Average_price": 150000
     },
     {
       "Production_Year": 2011,
       "Average_price": 98295.4
     },
     {
       "Production_Year": 2012,
       "Average_price": 96189.66667
     },
     {
       "Production_Year": 2013,
       "Average_price": 170000
     },
     {
       "Production_Year": 2014,
       "Average_price": 207184.5
     }
   ]
 


 

  
}
