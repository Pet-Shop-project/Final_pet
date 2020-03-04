import { Component, OnInit } from '@angular/core';
import { DogsService } from "src/app/services/dogs.service";
import { Dogs } from "src/app/dogs";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-addform-admin',
  templateUrl: './addform-admin.component.html',
  styleUrls: ['./addform-admin.component.css']
})
export class AddformAdminComponent implements OnInit {

  constructor(private getnew:DogsService,private nav:NavbarDashboardService) { }
  
   dogModel=new Dogs("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewdog(this.dogModel).subscribe(response =>{
      console.log('data saved',response)
   })
   this.nav.show()
   }

}
