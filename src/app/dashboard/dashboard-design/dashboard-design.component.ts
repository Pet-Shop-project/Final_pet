import { Component, OnInit } from '@angular/core';
import {NavbarService} from '../../services/navbar.service'
import { AdminloginService } from 'src/app/adminlogin/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-design',
  templateUrl: './dashboard-design.component.html',
  styleUrls: ['./dashboard-design.component.css']
})
export class DashboardDesignComponent implements OnInit {

  constructor(public nav: NavbarService,private router:Router,private LogServ : AdminloginService ) {
    if(this.LogServ.auth()){
      console.log(this.LogServ.auth())
      this.router.navigate(['../dashboard'])
    }
    else{
      this.router.navigate(['/adminlogin'])
      
    }
   }

  ngOnInit() {
  this.nav.hide()
}}
