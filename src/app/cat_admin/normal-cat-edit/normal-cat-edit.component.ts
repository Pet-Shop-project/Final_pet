import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Cats} from '../../cats'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-normal-cat-edit',
  templateUrl: './normal-cat-edit.component.html',
  styleUrls: ['./normal-cat-edit.component.css']
})
export class NormalCatEditComponent implements OnInit {

  constructor(private catServ:HeavtCatsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public cat=new Cats ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
      console.log(typeof(params.get("_id")))
     });
     this.catServ.get_normal_details(this.code).subscribe(data=>{
      this.cat=data;
      this.ID=this.code.slice(0,9);
      console.log(this.cat);
  })
  }
  onSubmit(){
    console.log("heree")
      this.catServ.updatenormalpet(this.code,this.cat).subscribe(data=>{
        
       
        
        console.log(data);
        
        })
        console.log(this.cat);
        
    }
}
