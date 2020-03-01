import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Smallpets } from 'src/app/smallpets';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';

@Component({
  selector: 'app-allsmallpetsearch',
  templateUrl: './allsmallpetsearch.component.html',
  styleUrls: ['./allsmallpetsearch.component.css']
})
export class AllsmallpetsearchComponent implements OnInit {

  constructor(private router:Router,private getheavypet:SmallpetServiceService,private route:ActivatedRoute) { }
  public heavyid;
  public name;
public pet=new Smallpets("","",0,0,"",0,"",[""]);
public smallpet:[];
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.getheavypet.search(this.name).subscribe(data=>{
       this.smallpet=data;
     })
  }
  
  showdetails(all){
    this.router.navigate(["/alldetail",all._id])
    }
}
