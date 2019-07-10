import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { BroraRoutingModule, routedComponents } from './brora-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    BroraRoutingModule,
    ThemeModule
  ]
})
export class BroraModule { }
