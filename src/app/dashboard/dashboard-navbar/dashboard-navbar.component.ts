import { Component, OnInit } from '@angular/core';
import { GeneraladminService } from 'src/app/addnewadmin/generaladmin.service';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/adminlogin/adminlogin.service';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit {
  user : String;

  constructor(private router:Router,private LogServ : AdminloginService,private gen : GeneraladminService) { 
    gen.GetUser().subscribe(res=>
      this.user= res as string
 )
  }
  Logout()
  {
   if(this.LogServ.auth()){
    localStorage.removeItem("Admintoken")
    this.router.navigate(['/adminlogin'])
   }
   else{
     this.router.navigate(['/dashboard'])
   }
     
  }

  ngOnInit() {
  }

}
