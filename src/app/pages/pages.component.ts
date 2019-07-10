import { Component } from '@angular/core';

import { MENU_ITEMS_1 } from './pages-menu';
import { MENU_ITEMS_2 } from './pages-menu'; 

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu_1"></nb-menu>
      <nb-menu [items]="menu_2"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  menu_1 = MENU_ITEMS_1;
  menu_2 = MENU_ITEMS_2;
}