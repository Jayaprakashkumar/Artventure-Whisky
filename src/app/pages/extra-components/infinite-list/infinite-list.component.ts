import { Component } from '@angular/core';
import { NewsService } from '../services/news.service'; 4
import { extraComponentService } from '../extraComponent-service';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
})
export class InfiniteListComponent {

  byDealerData: any = [];
  isDealerData: boolean = false;
  byDealerDataList: any = ["Artist_name",
    "Artwork_title",
    "Hammer price",
    "Estimate low",
    "Estimate high"]
  // byDealerDataList : any = ["Production_Year", "Average_price"]
  constructor(private httpService: extraComponentService) { }

  ngOnInit() {
    this.httpService.getBydealerData().subscribe(data => {
      this.byDealerData = data;
      console.log(data);
      console.log(this.byDealerData);
      this.isDealerData = true;
    })
  }




  // firstCard = {
  //   news: [],
  //   placeholders: [],
  //   loading: false,
  //   pageToLoadNext: 1,
  // };
  // secondCard = {
  //   news: [],
  //   placeholders: [],
  //   loading: false,
  //   pageToLoadNext: 1,
  // };
  // pageSize = 10;

  // constructor(private newsService: NewsService) {}

  // loadNext(cardData) {
  //   if (cardData.loading) { return; }

  //   cardData.loading = true;
  //   cardData.placeholders = new Array(this.pageSize);
  //   this.newsService.load(cardData.pageToLoadNext, this.pageSize)
  //     .subscribe(nextNews => {
  //       cardData.placeholders = [];
  //       cardData.news.push(...nextNews);
  //       cardData.loading = false;
  //       cardData.pageToLoadNext++;
  //     });
  // }
}
