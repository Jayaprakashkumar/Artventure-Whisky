import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HighlandParkRoutingModule, routedComponents } from './highland-park-routing.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    ThemeModule,
    HighlandParkRoutingModule
  ]
})
export class HighlandParkModule { }
