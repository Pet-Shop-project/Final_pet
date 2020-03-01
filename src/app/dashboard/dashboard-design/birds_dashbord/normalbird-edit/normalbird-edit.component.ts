import { Component, OnInit } from '@angular/core';
import { BirdsService } from "src/app/services/birds.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Birds } from "src/app/birds";

@Component({
  selector: 'app-normalbird-edit',
  templateUrl: './normalbird-edit.component.html',
  styleUrls: ['./normalbird-edit.component.css']
})
export class NormalbirdEditComponent implements OnInit {

  constructor(private birdServ:BirdsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public bird=new Birds ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
      console.log(typeof(params.get("_id")))
     });
     this.birdServ.normaldetails(this.code).subscribe(data=>{
      this.bird=data;
      this.ID=this.code.slice(0,9);
      console.log(this.bird);
  })
  }

  onSubmit(){
    console.log("heree")
      this.birdServ.updatenormalpet(this.code,this.bird).subscribe(data=>{
        
       
        
        console.log(data);
        
        })
        console.log(this.bird);
        
    }

}
