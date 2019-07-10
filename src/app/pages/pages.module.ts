import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RosebankModule } from './rosebank/rosebank.module';
import { HighlandParkModule } from './highland-park/highland-park.module';
import { DuncanTaylorModule } from './duncan-taylor/duncan-taylor.module';
import { BroraModule } from './brora/brora.module';
import { PortEllenModule } from './port-ellen/port-ellen.module';
import { GlenugieModule } from './glenugie/glenugie.module';
import {DalmoreModule} from './dalmore/dalmore.module';
import {YamazakiModule} from './yamazaki/yamazaki.module';
import {KaruizawaModule} from './karuizawa/karuizawa.module';
import {HanyaModule} from './hanya/hanya.module';
import {PaymentModule} from './payment/payment.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    RosebankModule,
    HighlandParkModule,
    DuncanTaylorModule,
    BroraModule,
    PortEllenModule,
    GlenugieModule,
    DalmoreModule,
    YamazakiModule,
    KaruizawaModule,
    HanyaModule,
    PaymentModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
