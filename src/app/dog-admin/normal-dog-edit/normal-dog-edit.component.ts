import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Dogs } from 'src/app/dogs';
import { DogsService } from 'src/app/services/dogs.service';
@Component({
  selector: 'app-normal-dog-edit',
  templateUrl: './normal-dog-edit.component.html',
  styleUrls: ['./normal-dog-edit.component.css']
})
export class NormalDogEditComponent implements OnInit {

  constructor(private dogServ:DogsService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;

  public dog=new Dogs ("","",0,0,"",0,"",['']);
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('id');
      console.log(typeof(params.get("_id")))
     });
     this.dogServ.normaldetails(this.code).subscribe(data=>{
      this.dog=data;
      this.ID=this.code.slice(0,9);
      console.log(this.dog);
  })
  }
  onSubmit(){
    console.log("heree")
      this.dogServ.updatenormalpet(this.code,this.dog).subscribe(data=>{
        
       
        
        console.log(data);
        
        })
        console.log(this.dog);
        
    }
}
