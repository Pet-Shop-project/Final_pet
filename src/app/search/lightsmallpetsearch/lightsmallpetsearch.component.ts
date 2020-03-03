import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Smallpets } from 'src/app/smallpets';

@Component({
  selector: 'app-lightsmallpetsearch',
  templateUrl: './lightsmallpetsearch.component.html',
  styleUrls: ['./lightsmallpetsearch.component.css']
})
export class LightsmallpetsearchComponent implements OnInit {
  public heavyid;
  public name;
public pet=new Smallpets("","",0,0,"",0,"",[""]);
public smallpet:[];

  constructor(private router:Router,private getheavypet:SmallpetServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.getheavypet.lightsearch(this.name).subscribe(data=>{
       this.smallpet=data;
     })
  }
  showdetails(light){
    this.router.navigate(["/lightdetail",light._id])
    }
    back(){
      this.router.navigate(['smallpets/light'])
      }
}
