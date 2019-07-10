import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { AuthLoginService } from '../../../auth/authService/auth-login.service';
import { Router, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers:[AuthLoginService]
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;
  private Description:String = "";

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  menuList: {icon:String, title:String, description:String}[] =[
    {
      icon: "nb-star",
      title: "Fine Art",
      description: "Fine art, since in the year of 1975"
    },
    {
      icon: "nb-layout-default",
      title: "Whisky",
      description: "Whisky, since in the year of 8575"
    },
    {
      icon: "nb-location",
      title: "Vintage Car",
      description: "Vintage Car, since in the year of 1975"
    },
    {
      icon: "nb-e-commerce",
      title: "Fine Whisky",
      description: "Fine Whisky, since in the year of 1975"
    },
    {
      icon: "nb-home",
      title: "Watch",
      description: "Watch, since in the year of 1975"
    },
     {
      icon: "nb-compose",
      title: "Jewellery",
      description: "Jewellery, since in the year of 1975"
    }
  ]


  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private authService: AuthLoginService,
              private router: Router,
              private location: Location,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => this.user = users.nick);
  }

  


  onMouseOver(name){
    this.menuList.forEach(element => {
      if(element.title == name)
        this.Description = element.description;
    });
}

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.router.navigate(['/login']);
      // this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}
