import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Smallpets } from "src/app/smallpets";

@Component({
  selector: 'app-lightpet-edit',
  templateUrl: './lightpet-edit.component.html',
  styleUrls: ['./lightpet-edit.component.css']
})
export class LightpetEditComponent implements OnInit {

  constructor(private petServ:SmallpetServiceService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public pet=new Smallpets ("","",0,0,"",0,"",['']); 
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
      
     });
     this.petServ.getlightdetails(this.code).subscribe(data=>{
      this.pet=data;
      this.ID=this.code.slice(0,9);
     
  })
  }

  onSubmit(){
  
      this.petServ.updatelightpet(this.code,this.pet).subscribe(data=>{
        
       
        
       
        
        })
       
        
    }



}
