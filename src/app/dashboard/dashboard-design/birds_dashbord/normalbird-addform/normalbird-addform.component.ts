import { Component, OnInit } from '@angular/core';
import { Birds } from "src/app/birds";
import { BirdsService } from "src/app/services/birds.service";

@Component({
  selector: 'app-normalbird-addform',
  templateUrl: './normalbird-addform.component.html',
  styleUrls: ['./normalbird-addform.component.css']
})
export class NormalbirdAddformComponent implements OnInit {

  constructor(private getnew:BirdsService) { }
  
   birdModel=new Birds("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewnormalbird(this.birdModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
 
}
