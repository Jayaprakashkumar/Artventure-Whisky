import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DalmoreComponent } from './dalmore.component';
import { OverviewComponent } from './overview/overview.component';
import { ByAgeStatementComponent } from './by-age-statement/by-age-statement.component';
import { ByBottledYearComponent } from './by-bottled-year/by-bottled-year.component';
import { ByCasksComponent } from './by-casks/by-casks.component';
import { ByEditionComponent } from './by-edition/by-edition.component';
import { UpcomingSalesComponent } from './upcoming-sales/upcoming-sales.component';

const routes: Routes = [{
    
    path: '',
    component: DalmoreComponent,
    children: [
        {
            path: 'overview',
            component: OverviewComponent,
        },
        {
            path: 'by-age-statement',
            component: ByAgeStatementComponent,
        },
        {
            path: 'by-bottled-year',
            component: ByBottledYearComponent,
        },
        {
            path: 'by-casks',
            component: ByCasksComponent,
        },
        {
            path: 'by-edition',
            component: ByEditionComponent,
        },
        {
            path: 'upcoming-sales',
            component: UpcomingSalesComponent,
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
export class DalmoreRoutingModule {

}

export const routedComponents = [
    OverviewComponent,
    DalmoreComponent,
    ByAgeStatementComponent,
    ByBottledYearComponent,
    ByCasksComponent,
    ByEditionComponent,
    UpcomingSalesComponent

];
