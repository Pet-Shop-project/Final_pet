import { Component, OnInit } from '@angular/core';
import { Cats } from 'src/app/cats';
import { HeavtCatsService } from 'src/app/services/heavt-cats.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lightcatsearch',
  templateUrl: './lightcatsearch.component.html',
  styleUrls: ['./lightcatsearch.component.css']
})
export class LightcatsearchComponent implements OnInit {
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
     this.catServ.lightsearch(this.name).subscribe(data=>{
       this.cats=data;
     })
  }
  onSelect(cat){
    this.router.navigate(['/light-cats-details',cat._id])
   console.log(cat._id);
   
  }
  back(){
    this.router.navigate(['/light-cats'])
    }
}
