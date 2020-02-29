import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Smallpets } from 'src/app/smallpets';

@Component({
  selector: 'app-heavysmallpetsearch',
  templateUrl: './heavysmallpetsearch.component.html',
  styleUrls: ['./heavysmallpetsearch.component.css']
})
export class HeavysmallpetsearchComponent implements OnInit {
  public heavyid;
  public name;
public pet=new Smallpets("","",0,"","",0,"",[""]);
public smallpet:[];

  constructor(private router:Router,private getheavypet:SmallpetServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.getheavypet.heavysearch(this.name).subscribe(data=>{
       this.smallpet=data;
     })
  }
  showdetails(heavy){
    this.router.navigate(["/heavydetail",heavy._id])
    }
}
