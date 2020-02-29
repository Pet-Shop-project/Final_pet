import { Component, OnInit } from '@angular/core';
import { DogsService } from "src/app/services/dogs.service";
import { Dogs } from "src/app/dogs";

@Component({
  selector: 'app-lightdog-addform',
  templateUrl: './lightdog-addform.component.html',
  styleUrls: ['./lightdog-addform.component.css']
})
export class LightdogAddformComponent implements OnInit {

  constructor(private getnew:DogsService) { }
  
   dogModel=new Dogs("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewlightdog(this.dogModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
}
