import { Component, OnInit } from '@angular/core';
import { Birds } from "src/app/birds";
import { BirdsService } from "src/app/services/birds.service";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-normalbird-addform',
  templateUrl: './normalbird-addform.component.html',
  styleUrls: ['./normalbird-addform.component.css']
})
export class NormalbirdAddformComponent implements OnInit {

  constructor(private getnew:BirdsService,private nav:NavbarDashboardService) { }
  
   birdModel=new Birds("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    this.nav.show()
   }
   onSubmit(){
     this.getnew.addnewnormalbird(this.birdModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
 
}
