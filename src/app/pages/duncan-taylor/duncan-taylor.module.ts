import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { duncanTaylorRoutingModule, routedComponents } from './duncan-taylor-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    duncanTaylorRoutingModule,
    ThemeModule
  ]
})
export class DuncanTaylorModule { }
