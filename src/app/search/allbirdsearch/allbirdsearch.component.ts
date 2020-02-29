import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Birds } from 'src/app/birds';

@Component({
  selector: 'app-allbirdsearch',
  templateUrl: './allbirdsearch.component.html',
  styleUrls: ['./allbirdsearch.component.css']
})
export class AllbirdsearchComponent implements OnInit {
  public allid;
  public birds=new Birds("", "",0,0,"",0,"",[""]);
  name: string;

  constructor(private getallbirds:BirdsService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.getallbirds.search(this.name).subscribe(data=>{
       this.birds=data;
     })
  }
  showdetails(bird){
    this.router.navigate(["/all-details",bird._id])
    }
}
