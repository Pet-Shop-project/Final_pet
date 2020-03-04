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
  public Accessories=[]
   
      
  public ccessories=new Accessories ("","",0,0,"",0,"",['']);
  ngOnInit() {
    this.Serv.listaccessories().subscribe(data=>{
      this.Accessories=data;
    

    })
  

}
// 

 
  onSubmit(){
    console.log("heree")
      this.Serv.updatepet(this.code,this.ccessories).subscribe(data=>{
        
       
        
        console.log(data);
        
        })
        console.log(this.ccessories);
        
    }
}
