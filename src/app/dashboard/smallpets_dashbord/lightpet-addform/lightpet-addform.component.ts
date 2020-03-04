import { Component, OnInit } from '@angular/core';
import { Smallpets } from "src/app/smallpets";
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";

@Component({
  selector: 'app-lightpet-addform',
  templateUrl: './lightpet-addform.component.html',
  styleUrls: ['./lightpet-addform.component.css']
})
export class LightpetAddformComponent implements OnInit {

  constructor(private getnew:SmallpetServiceService) { }
  
   petModel=new Smallpets("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   
   onSubmit(){
     this.getnew.addnewlightpet(this.petModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }

}
