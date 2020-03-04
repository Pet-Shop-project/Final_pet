import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Cats} from '../../cats'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-heavy-cat-edit',
  templateUrl: './heavy-cat-edit.component.html',
  styleUrls: ['./heavy-cat-edit.component.css']
})
export class HeavyCatEditComponent implements OnInit {

  constructor(private catServ:HeavtCatsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public cat=new Cats ("","",0,0,"",0,"",['']);
  ngOnInit() {

    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
      
     });
     this.catServ.heavy_cats_details(this.code).subscribe(data=>{
      this.cat=data;
      this.ID=this.code.slice(0,9);
     
  })
  }
  onSubmit(){
    console.log("heree")
      this.catServ.updateheavypet(this.code,this.cat).subscribe(data=>{
        
       
        
        
        })
       
        
    }
}
