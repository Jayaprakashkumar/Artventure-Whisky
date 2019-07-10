import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { YamazakiRoutingModule, routedComponents } from './yamazaki-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    ThemeModule,
    YamazakiRoutingModule
  ]
})
export class YamazakiModule { }
