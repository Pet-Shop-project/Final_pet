import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Smallpets } from "src/app/smallpets";

@Component({
  selector: 'app-heavypet-edit',
  templateUrl: './heavypet-edit.component.html',
  styleUrls: ['./heavypet-edit.component.css']
})
export class HeavypetEditComponent implements OnInit {

  constructor(private petServ:SmallpetServiceService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public pet=new Smallpets ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
    
     });
     this.petServ.getheavydetails(this.code).subscribe(data=>{
      this.pet=data;
      this.ID=this.code.slice(0,9);
     
  })
  }

  onSubmit(){
    console.log("heree")
      this.petServ.updateheavypet(this.code,this.pet).subscribe(data=>{
        
       
        
        console.log(data);
        
        })
        console.log(this.pet);
        
    }



}
