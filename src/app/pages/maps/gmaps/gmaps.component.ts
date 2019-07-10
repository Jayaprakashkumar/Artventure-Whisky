import { Component } from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmap.component.html'
  // template: `
  //   <nb-card>
  //     <nb-card-header>Google Maps</nb-card-header>
  //     <nb-card-body>
  //       <agm-map [latitude]="lat" [longitude]="lng">
  //         <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
  //       </agm-map>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class GmapsComponent {

  // lat = 51.678418;
  // lng = 7.809007;
  prodYrList = ["Production_Year", "Avg_Hammer_Price"];
  productionYrData :{Production_Year:number, Avg_Hammer_Price: number}[]=[
    {
      "Production_Year": 1946,
      "Avg_Hammer_Price": 17000
    },
    {
      "Production_Year": 1950,
      "Avg_Hammer_Price": 25053.2
    },
    {
      "Production_Year": 1951,
      "Avg_Hammer_Price": 12175
    },
    {
      "Production_Year": 1953,
      "Avg_Hammer_Price": 60000
    },
    {
      "Production_Year": 1954,
      "Avg_Hammer_Price": 17250
    },
    {
      "Production_Year": 1955,
      "Avg_Hammer_Price": 16800
    },
    {
      "Production_Year": 1956,
      "Avg_Hammer_Price": 35000
    },
    {
      "Production_Year": 1957,
      "Avg_Hammer_Price": 250916.6667
    },
    {
      "Production_Year": 1958,
      "Avg_Hammer_Price": 104666.6667
    },
    {
      "Production_Year": 1959,
      "Avg_Hammer_Price": 61000
    },
    {
      "Production_Year": 1960,
      "Avg_Hammer_Price": 63126.5
    },
    {
      "Production_Year": 1961,
      "Avg_Hammer_Price": 46000
    },
    {
      "Production_Year": 1962,
      "Avg_Hammer_Price": 76125
    },
    {
      "Production_Year": 1963,
      "Avg_Hammer_Price": 18750
    },
    {
      "Production_Year": 1964,
      "Avg_Hammer_Price": 35214.28571
    },
    {
      "Production_Year": 1965,
      "Avg_Hammer_Price": 48787.5
    },
    {
      "Production_Year": 1966,
      "Avg_Hammer_Price": 39066.66667
    },
    {
      "Production_Year": 1967,
      "Avg_Hammer_Price": 94709.09091
    },
    {
      "Production_Year": 1968,
      "Avg_Hammer_Price": 65559.1
    },
    {
      "Production_Year": 1969,
      "Avg_Hammer_Price": 94414.33333
    },
    {
      "Production_Year": 1970,
      "Avg_Hammer_Price": 23743.66667
    },
    {
      "Production_Year": 1971,
      "Avg_Hammer_Price": 139200
    },
    {
      "Production_Year": 1972,
      "Avg_Hammer_Price": 146500
    },
    {
      "Production_Year": 1973,
      "Avg_Hammer_Price": 59281
    },
    {
      "Production_Year": 1974,
      "Avg_Hammer_Price": 107426.1875
    },
    {
      "Production_Year": 1975,
      "Avg_Hammer_Price": 151062.5
    },
    {
      "Production_Year": 1976,
      "Avg_Hammer_Price": 95771.66667
    },
    {
      "Production_Year": 1977,
      "Avg_Hammer_Price": 56833.33333
    },
    {
      "Production_Year": 1978,
      "Avg_Hammer_Price": 83923.36364
    },
    {
      "Production_Year": 1979,
      "Avg_Hammer_Price": 51812.5
    },
    {
      "Production_Year": 1980,
      "Avg_Hammer_Price": 68853.81818
    },
    {
      "Production_Year": 1981,
      "Avg_Hammer_Price": 66812.83333
    },
    {
      "Production_Year": 1982,
      "Avg_Hammer_Price": 68432.22222
    },
    {
      "Production_Year": 1983,
      "Avg_Hammer_Price": 48704.2
    },
    {
      "Production_Year": 1984,
      "Avg_Hammer_Price": 121833.3333
    },
    {
      "Production_Year": 1985,
      "Avg_Hammer_Price": 108949.3333
    },
    {
      "Production_Year": 1986,
      "Avg_Hammer_Price": 87674.18182
    },
    {
      "Production_Year": 1987,
      "Avg_Hammer_Price": 142964.5
    },
    {
      "Production_Year": 1988,
      "Avg_Hammer_Price": 99283.42857
    },
    {
      "Production_Year": 1989,
      "Avg_Hammer_Price": 47986.66667
    },
    {
      "Production_Year": 1990,
      "Avg_Hammer_Price": 110080.1111
    },
    {
      "Production_Year": 1991,
      "Avg_Hammer_Price": 45189.72727
    },
    {
      "Production_Year": 1992,
      "Avg_Hammer_Price": 66989.83333
    },
    {
      "Production_Year": 1993,
      "Avg_Hammer_Price": 87471.14286
    },
    {
      "Production_Year": 1994,
      "Avg_Hammer_Price": 66435.58333
    },
    {
      "Production_Year": 1995,
      "Avg_Hammer_Price": 60625.66667
    },
    {
      "Production_Year": 1996,
      "Avg_Hammer_Price": 59176
    },
    {
      "Production_Year": 1997,
      "Avg_Hammer_Price": 39258.09091
    },
    {
      "Production_Year": 1998,
      "Avg_Hammer_Price": 60622.6
    },
    {
      "Production_Year": 1999,
      "Avg_Hammer_Price": 168823.8182
    },
    {
      "Production_Year": 2000,
      "Avg_Hammer_Price": 108466.5
    },
    {
      "Production_Year": 2001,
      "Avg_Hammer_Price": 48496.5
    },
    {
      "Production_Year": 2002,
      "Avg_Hammer_Price": 94901.26667
    },
    {
      "Production_Year": 2003,
      "Avg_Hammer_Price": 161375.1333
    },
    {
      "Production_Year": 2004,
      "Avg_Hammer_Price": 168001.6667
    },
    {
      "Production_Year": 2005,
      "Avg_Hammer_Price": 83343.45455
    },
    {
      "Production_Year": 2006,
      "Avg_Hammer_Price": 66563.83333
    },
    {
      "Production_Year": 2007,
      "Avg_Hammer_Price": 73769.71429
    },
    {
      "Production_Year": 2008,
      "Avg_Hammer_Price": 109664.5
    },
    {
      "Production_Year": 2009,
      "Avg_Hammer_Price": 150000
    },
    {
      "Production_Year": 2011,
      "Avg_Hammer_Price": 98295.4
    },
    {
      "Production_Year": 2012,
      "Avg_Hammer_Price": 96189.66667
    },
    {
      "Production_Year": 2013,
      "Avg_Hammer_Price": 170000
    },
    {
      "Production_Year": 2014,
      "Avg_Hammer_Price": 207184.5
    }
   ]



  sales_report: {title:String, value:String, description:String}[] =[
    {
      title:'Total Sale',
      value:'$3,522,785',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Sell-Through Rate',
      value:'95%',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Top Realized Price',
      value:'$580,000',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Price to Low Estimate Price',
      value:'1.48',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'1 Year Sales Volume',
      value:'5',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Average Price per cm²',
      value:'$17.85',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Most supplied price range on the secondary market',
      value:'$0 - 50,000k',
      description: 'Better than lastweek(60%)'
    }
  ]
}
