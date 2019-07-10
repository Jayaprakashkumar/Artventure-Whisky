import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { KaruizawaRoutingModule, routedComponents } from './karuizawa-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    KaruizawaRoutingModule,
    ThemeModule
  ]
})
export class KaruizawaModule { }
