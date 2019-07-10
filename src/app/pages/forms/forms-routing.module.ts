import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ByEditionBowmoreComponent } from './by-edition-bowmore/by-edition-bowmore.component';
import { UpcomingSaleComponent} from './upcoming-sale/upcoming-sale.component';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [
    {
      path: 'inputs',
      component: FormInputsComponent,
    },
    {
      path: 'layouts',
      component: FormLayoutsComponent,
    },
    {
      path: 'buttons',
      component: ButtonsComponent,
    },
    {
      path: 'datepicker',
      component: DatepickerComponent,
    },
    {
      path: 'by-edition',
      component: ByEditionBowmoreComponent,
    },
    {
      path: 'upcoming-sale',
      component: UpcomingSaleComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
  DatepickerComponent,
  ByEditionBowmoreComponent,
  UpcomingSaleComponent
];
