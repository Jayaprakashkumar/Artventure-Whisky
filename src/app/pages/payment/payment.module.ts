// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PaymentComponent } from './payment.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [PaymentComponent],
  imports: [
    // CommonModule,
    ThemeModule,
    PaymentRoutingModule,
    FormsModule
  ],
  bootstrap: [PaymentComponent]
})
export class PaymentModule { }

