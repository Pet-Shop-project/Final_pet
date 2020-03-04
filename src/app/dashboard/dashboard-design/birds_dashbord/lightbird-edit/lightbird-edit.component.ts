import { Component, OnInit } from '@angular/core';
import { BirdsService } from "src/app/services/birds.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Birds } from "src/app/birds";

@Component({
  selector: 'app-lightbird-edit',
  templateUrl: './lightbird-edit.component.html',
  styleUrls: ['./lightbird-edit.component.css']
})
export class LightbirdEditComponent implements OnInit {

  constructor(private birdServ:BirdsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public bird=new Birds ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
    
     });
     this.birdServ.lightbirddetails(this.code).subscribe(data=>{
      this.bird=data;
      this.ID=this.code.slice(0,9);
     
  })
  }

  onSubmit(){
    console.log("heree")
      this.birdServ.updatelightpet(this.code,this.bird).subscribe(data=>{
        
       
        
      
        
        })
        
        
    }


}
