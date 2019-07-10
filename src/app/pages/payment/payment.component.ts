import { Component, AfterViewChecked } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

declare let paypal: any;
@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewChecked {
    
    // constructor(private activeModal :NgbActiveModal){
        
    // }

    addScript: boolean = false;
    paypalLoad: boolean = true;
    
    finalAmount: number = 1;
  
    paypalConfig = {
      env: 'sandbox',
      client: {
        sandbox: 'AeefrDoL4DEK_G6V-4fgACkHBF8zFOMAiTsYv-CpC4ki48P_coJrDDeq3yIm2F-WH0UIDxwSj7aictWp',
        production: '<your-production-key-here>'
      },
      commit: true,
      payment: (data, actions) => {
        return actions.payment.create({
          payment: {
            transactions: [
              { amount: { total: this.finalAmount, currency: 'USD' } }
            ]
          }
        });
      },
      onAuthorize: (data, actions) => {
        return actions.payment.execute().then((payment) => {
          //Do something when payment is successful.
        })
      }
    };
  
    ngAfterViewChecked(): void {
      if (!this.addScript) {
        this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
          this.paypalLoad = false;
        })
      }
    }
    
    addPaypalScript() {
      this.addScript = true;
      return new Promise((resolve, reject) => {
        let scripttagElement = document.createElement('script');    
        scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
        scripttagElement.onload = resolve;
        document.body.appendChild(scripttagElement);
      })
    }
  
    // closeModal() {
    //     this.activeModal.close();
    //   }
  }
  
