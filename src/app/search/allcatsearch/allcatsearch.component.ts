import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeavtCatsService } from 'src/app/services/heavt-cats.service';
import {Cats} from '../../cats'

@Component({
  selector: 'app-allcatsearch',
  templateUrl: './allcatsearch.component.html',
  styleUrls: ['./allcatsearch.component.css']
})
export class AllcatsearchComponent implements OnInit {

  public code;
  public cats:[];
  public ID;
  public name;
  public cat=new Cats ("","",0,0,"",0,"",['']);
  constructor(private catServ:HeavtCatsService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.catServ.search(this.name).subscribe(data=>{
       this.cats=data;
     })
  }
  onSelect(cat){
    this.router.navigate(['/all-cat-details',cat._id])
    console.log(cat._id)
  }

}
