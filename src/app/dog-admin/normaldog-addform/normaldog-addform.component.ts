import { Component, OnInit } from '@angular/core';
import { DogsService } from "src/app/services/dogs.service";
import { Dogs } from "src/app/dogs";

@Component({
  selector: 'app-normaldog-addform',
  templateUrl: './normaldog-addform.component.html',
  styleUrls: ['./normaldog-addform.component.css']
})
export class NormaldogAddformComponent implements OnInit {

  constructor(private getnew:DogsService) { }
  
   dogModel=new Dogs("","",0 , 0,"",0 ,"",[""])
   ngOnInit() {
    
   }
   onSubmit(){
     this.getnew.addnewnormaldog(this.dogModel).subscribe(response =>{
      console.log('data saved',response)
   })
   }
}
