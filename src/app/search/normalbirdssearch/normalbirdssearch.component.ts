import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-normalbirdssearch',
  templateUrl: './normalbirdssearch.component.html',
  styleUrls: ['./normalbirdssearch.component.css']
})
export class NormalbirdssearchComponent implements OnInit {

  public allid;
  public birds=new Birds("", "",0,0,"",0,"",[""]);
  public name;
  constructor(private getallbirds:BirdsService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.getallbirds.normalsearch(this.name).subscribe(data=>{
       this.birds=data;
     })
  }
  showdetails(bird){
    this.router.navigate(["/normal-details",bird._id])
    }
}
