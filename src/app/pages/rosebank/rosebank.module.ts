import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { RosebankRoutingModule, routedComponents } from './rosebank-routing.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    ThemeModule,
    RosebankRoutingModule

    
  ]
})
export class RosebankModule { }
