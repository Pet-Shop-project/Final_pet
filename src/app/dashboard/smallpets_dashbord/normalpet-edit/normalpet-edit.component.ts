import { Component, OnInit } from '@angular/core';
import { Smallpets } from "src/app/smallpets";
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-normalpet-edit',
  templateUrl: './normalpet-edit.component.html',
  styleUrls: ['./normalpet-edit.component.css']
})
export class NormalpetEditComponent implements OnInit {

  constructor(private petServ:SmallpetServiceService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public pet=new Smallpets ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
    
     });
     this.petServ.getnormaldetails(this.code).subscribe(data=>{
      this.pet=data;
      this.ID=this.code.slice(0,9);
      
  })
  }

  onSubmit(){
   
      this.petServ.updatenormalpet(this.code,this.pet).subscribe(data=>{
        
       
        
        
        
        })
      
        
    }


}
