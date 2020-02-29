import { Component, OnInit } from '@angular/core';
import { Smallpets } from "src/app/smallpets";
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";

@Component({
  selector: 'app-smallpet-admin-addform',
  templateUrl: './smallpet-admin-addform.component.html',
  styleUrls: ['./smallpet-admin-addform.component.css']
})
export class SmallpetAdminAddformComponent implements OnInit {

  constructor(private getnew:SmallpetServiceService) { }
  
   petModel=new Smallpets("","",0 ,0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewheavypet(this.petModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
}
