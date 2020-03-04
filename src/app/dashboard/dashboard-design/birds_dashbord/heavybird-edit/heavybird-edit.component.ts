import { Component, OnInit } from '@angular/core';
import { Birds } from "src/app/birds";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";
import { BirdsService } from "src/app/services/birds.service";

@Component({
  selector: 'app-heavybird-edit',
  templateUrl: './heavybird-edit.component.html',
  styleUrls: ['./heavybird-edit.component.css']
})
export class HeavybirdEditComponent implements OnInit {

  constructor(private birdServ:BirdsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public bird=new Birds ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
     
     });
     this.birdServ.heavydetails(this.code).subscribe(data=>{
      this.bird=data;
      this.ID=this.code.slice(0,9);
      
  })
  }

  onSubmit(){
    console.log("heree")
      this.birdServ.updateheavypet(this.code,this.bird).subscribe(data=>{
        
       
        
       
        
        })
       
        
    }

}
