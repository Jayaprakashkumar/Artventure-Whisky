import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PortEllenRoutingModule, routedComponents } from './port-ellen-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    PortEllenRoutingModule,
    ThemeModule
  ]
})
export class PortEllenModule { }
