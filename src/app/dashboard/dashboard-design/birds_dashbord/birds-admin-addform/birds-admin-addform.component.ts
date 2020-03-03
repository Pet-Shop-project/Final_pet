import { Component, OnInit } from '@angular/core';
import { Birds } from "src/app/birds";
import { BirdsService } from "src/app/services/birds.service";
import { NavbarDashboardService } from 'src/app/services/navbar-dashboard.service';

@Component({
  selector: 'app-birds-admin-addform',
  templateUrl: './birds-admin-addform.component.html',
  styleUrls: ['./birds-admin-addform.component.css']
})
export class BirdsAdminAddformComponent implements OnInit {

  constructor(private getnew:BirdsService,private nav:NavbarDashboardService) { }
  
   birdModel=new Birds("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    this.nav.show()
   }
   onSubmit(){
     this.getnew.addnewheavybird(this.birdModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
}
