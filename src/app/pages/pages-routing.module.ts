import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  },
  {
    path: 'rosebank',
    loadChildren: './rosebank/rosebank.module#RosebankModule',
  },
  {
    path: 'highland',
    loadChildren: './highland-park/highland-park.module#HighlandParkModule',
  },
  {
    path: 'duncan-taylor',
    loadChildren: './duncan-taylor/duncan-taylor.module#DuncanTaylorModule',
  },
  {
    path: 'brora',
    loadChildren: './brora/brora.module#BroraModule',
  },
  {
    path: 'port-ellen',
    loadChildren: './port-ellen/port-ellen.module#PortEllenModule',
  },
  {
    path: 'glenugie',
    loadChildren: './glenugie/glenugie.module#GlenugieModule',
  },
  {
    path: 'dalmore',
    loadChildren: './dalmore/dalmore.module#DalmoreModule',
  },
  {
    path: 'dalmore',
    loadChildren: './dalmore/dalmore.module#DalmoreModule',
  },
  {
    path: 'yamazaki',
    loadChildren: './yamazaki/yamazaki.module#YamazakiModule',
  },
  {
    path: 'karuizawa',
    loadChildren: './karuizawa/karuizawa.module#KaruizawaModule',
  },
  {
    path: 'hanya',
    loadChildren: './hanya/hanya.module#HanyaModule',
  },
  {
    path: 'payment',
    loadChildren: './payment/payment.module#PaymentModule',
  },
   {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
