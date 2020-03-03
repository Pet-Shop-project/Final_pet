import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { Adminlogin } from './adminlogin';
import { AdminloginService } from './adminlogin.service';
import { NgForm } from '@angular/forms';
import { GeneraladminService } from '../addnewadmin/generaladmin.service';
import { NavbarDashboardService } from '../services/navbar-dashboard.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  Login : Adminlogin;
  Result: boolean=false;
  Result2: boolean=false;
  Div: string;
  Div2: string;
  constructor(private router:Router , private Gen:GeneraladminService,private adminserv:AdminloginService,private nav:NavbarDashboardService) { }

  ngOnInit() {
    this.resetForm()
    if (this.Gen.Registerd)
    {
      // console.log("asd")
      this.Result2 = true
    this.Div2= "Registerd Successfully, Login to Continue"
    }
    if (this.Gen.authorized)
    {
      console.log(this.Gen.authorized)
      // console.log("asd")
      this.Result2 = false;
      this.Result = true
    this.Div= "Please Login To view this Page"
    }
    this.nav.show()
  }
  onSubmit (form :NgForm)
  {
    this.insert(form);
  }
  insert (form :NgForm)
  {
    if (form.invalid)
   { 
     this.Result= true; 
    this.Div = "Complete All Data"
   }
   else
   { 
    this.adminserv.postData(this.Login).subscribe(
      res=>
      {
        this.Result2 = false;
        this.Result = true;
         console.log(res)
        this.resetForm(form);
        localStorage.setItem('Admintoken',res as string)
        this.router.navigate(['/dashboard'])
        
    },
    error=>
    {
      this.Result= true; 
  
      this.Div=error.error.Msg
      console.log("erro")
    }
    );
  }
  }
  resetForm( form? : NgForm)
  {
    if (form!=null)
    form.resetForm();
    this.Login = 
    {
    email : "",
    password :"",
   
    }
 
  }

}
