import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import { extraComponentService } from '../extraComponent-service';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  // providers: [extraComponentService]
})
export class ListComponent {
  serachvalue: string = "Default";
  whiskyDataCopy: any = [];

  searchOption = [
    { "value": "Default" },
    { "value": "Recently Added" },
    { "value": "Recently updated" },
    { "value": "Art work Years(ASC)" },
  ]

  value: number = 50;
  options: Options = {
    floor: 0,
    ceil: 2000000
  };
  whiskyData:any = [];
  constructor(private listservice: extraComponentService) { }

  ngOnInit(){
    this.listservice.getWhiskyData().subscribe(data =>
      {
        this.whiskyData = data;
        this.whiskyDataCopy = this.whiskyData;
      }
      )
  }
  searchOnChange() {
    console.log(this.serachvalue);
    this.whiskyDataCopy = this.whiskyData;
    if (this.serachvalue == "Recently Added") {
      this.whiskyDataCopy = this.whiskyDataCopy.filter(ele => ele.price == "$ 2500");
    } else if (this.serachvalue == "Recently updated") {
      this.whiskyDataCopy = this.whiskyDataCopy.filter(ele => ele.price == "$ 800");
    }
  }









































  // exhibiton_Details : {name:String, place:String, date:String}[]=[
  //   {
  //     name:'Alex Katz Paints Ada, 1957-2005 ',
  //     place: 'The Jewish Museum, New York, NY',
  //     date: 'October 27, 2006 - March 18, 2007'
  //   },
  //   {
  //     name:'Alex Katz Cut Outs: 1950s - 1980s ',
  //     place: "Gavin Brown's Enterprise, 291 Grand St, New York, NY ",
  //     date: 'November 5, 2017 - December 17, 2017'
  //   },
  //   {
  //     name:'Alex Katz: Cut Outs',
  //     place: 'Paul Kasmin Gallery, 515 West 27th St, New York, NY ',
  //     date: 'March 8, 2018 - April 12, 2018'
  //   },
  //   {
  //     name:'Alex Katz: Portraits & Late Summer Flowers',
  //     place: 'Meyerovich Gallery, San Francisco',
  //     date: 'August 1, 2013 - November 15, 2013'
  //   },
  //   {
  //     name:'Alex Katz: Quick Light ',
  //     place: 'Serpentine Gallery, London',
  //     date: 'June 2, 2016 - September 11, 2016'
  //   },
  //   {
  //     name:'Alex Katz: Grass and Trees  ',
  //     place: 'Richard Gray Gallery, Chicago, Illinois ',
  //     date: 'April 12, 2018 - June 2, 2018'
  //   }
  // ]




  // fruits = fruits;

  // users: { name: string, title: string }[] = [
  //   { name: 'Carla Espinosa', title: 'Nurse' },
  //   { name: 'Bob Kelso', title: 'Doctor of Medicine' },
  //   { name: 'Janitor', title: 'Janitor' },
  //   { name: 'Perry Cox', title: 'Doctor of Medicine' },
  //   { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  // ];
}
