import { Injectable } from '@angular/core';
import { AdminloginService } from './adminlogin.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GeneraladminService } from '../addnewadmin/generaladmin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  constructor(private gen:GeneraladminService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean>|Promise<boolean>|boolean {  
    if (localStorage.getItem('Admintoken') !==  null)
     return true 
     else
     {
           console.log("asd")
           this.gen.authorized = true;
           console.log(this.gen.authorized)
           this.router.navigate(['../dashboard'])
           return false;
     }

   
}
}
