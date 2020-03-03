import { Component, OnInit } from '@angular/core';
import { Birds } from "src/app/birds";
import { BirdsService } from "src/app/services/birds.service";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-lightbird-addform',
  templateUrl: './lightbird-addform.component.html',
  styleUrls: ['./lightbird-addform.component.css']
})
export class LightbirdAddformComponent implements OnInit {

  constructor(private getnew:BirdsService,private nav:NavbarDashboardService) { }
  
   birdModel=new Birds("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    this.nav.show()
   }
   onSubmit(){
     this.getnew.addnewlightbird(this.birdModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
}
