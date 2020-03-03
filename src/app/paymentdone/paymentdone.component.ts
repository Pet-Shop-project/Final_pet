import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-paymentdone',
  templateUrl: './paymentdone.component.html',
  styleUrls: ['./paymentdone.component.css']
})
export class PaymentdoneComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit() {
    this.nav.show()
  }

}
