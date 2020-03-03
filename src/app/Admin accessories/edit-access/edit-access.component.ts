import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AccessoriesService } from 'src/app/services/accessories.service';
import { Accessories } from 'src/app/accessories';
@Component({
  selector: 'app-edit-access',
  templateUrl: './edit-access.component.html',
  styleUrls: ['./edit-access.component.css']
})
export class EditAccessComponent implements OnInit {

  constructor(private Serv:AccessoriesService, private router:Router,private route:ActivatedRoute,) { }
  public code;
  public ID;
  public AccessoriesS=[]
   
      
  public Accessories=new Accessories ("","",0,0,"",0,"",['']);
  ngOnInit() {
   
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });
     this.Serv.accessories_details(this.code).subscribe(data=>{
      this.AccessoriesS=data;
    
      console.log(this.AccessoriesS);
  })

}
// 

 
onSubmit(){
  console.log("heree")
    this.Serv.updatepet(this.code,this.Accessories).subscribe(data=>{
      
     
      
      console.log(data);
      
      })}
}
