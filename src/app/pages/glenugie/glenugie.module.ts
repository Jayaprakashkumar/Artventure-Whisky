import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { GlenugieRoutingModule, routedComponents } from './glenugie-routing.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    GlenugieRoutingModule,
    ThemeModule
  ]
})
export class GlenugieModule { }
