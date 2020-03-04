import { Component, OnInit } from '@angular/core';
import { DogsService } from "src/app/services/dogs.service";
import { Dogs } from "src/app/dogs";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-lightdog-addform',
  templateUrl: './lightdog-addform.component.html',
  styleUrls: ['./lightdog-addform.component.css']
})
export class LightdogAddformComponent implements OnInit {

  constructor(private getnew:DogsService,private nav:NavbarDashboardService) { }
  
   dogModel=new Dogs("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewlightdog(this.dogModel).subscribe(response =>{
      console.log('data saved',response)
   })
   this.nav.show()
   }
}
