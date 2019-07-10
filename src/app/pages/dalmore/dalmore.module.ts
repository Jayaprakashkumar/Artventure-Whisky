import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DalmoreRoutingModule, routedComponents } from './dalmore-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    DalmoreRoutingModule,
    ThemeModule
  ]
})
export class DalmoreModule { }
