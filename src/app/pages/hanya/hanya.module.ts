import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { HanyaRoutingModule, routedComponents } from './hanya-routing.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    HanyaRoutingModule,
    ThemeModule
  ]
})
export class HanyaModule { }
