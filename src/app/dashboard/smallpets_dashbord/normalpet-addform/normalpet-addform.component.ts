import { Component, OnInit } from '@angular/core';
import { Smallpets } from "src/app/smallpets";
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-normalpet-addform',
  templateUrl: './normalpet-addform.component.html',
  styleUrls: ['./normalpet-addform.component.css']
})
export class NormalpetAddformComponent implements OnInit {

  constructor(private getnew:SmallpetServiceService,private nav:NavbarDashboardService) { }
  
   petModel=new Smallpets("","",0 ,0,"",0 ,"",[""])
   ngOnInit() {
    this.nav.show()
   }
   onSubmit(){
     this.getnew.addnewnormalpet(this.petModel).subscribe(response =>{
      console.log('data saved',response)
   })
   this.nav.show()
   }

}
