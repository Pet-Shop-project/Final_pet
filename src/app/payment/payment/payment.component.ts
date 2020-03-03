import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment'
import { from } from 'rxjs';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
    public cardModel=new Payment('','','');
    constructor(private pay:PaymentService,private router:Router,private nav :NavbarService) { }
    

  ngOnInit() {
    this.nav.show()
  }
  onSubmit() {
    this.pay.payment(this.cardModel).subscribe(
      data => {console.log('Payment done', data)
     if(data){
      this.router.navigate(['/done'])
     }
    
    },
      error => {console.log('Error',error)}
    
  
      )
    
    }
  

}
