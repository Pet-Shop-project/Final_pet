import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightsmall-admin',
  templateUrl: './lightsmall-admin.component.html',
  styleUrls: ['./lightsmall-admin.component.css']
})
export class LightsmallAdminComponent implements OnInit {
  
  pets:[];

  constructor(private getLightpet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getLightpet.getlightpet().subscribe(data =>
      this.pets=data
     
    );
   
  }
  delete(pet){
    this.getLightpet.deletelightsmall(pet._id).subscribe(data=>{
       
    
     })
     
   }
  showdetails(light){
    this.router.navigate(["/lightsmall-admin",light._id])
    }
    onSelect_light(pet){
      this.router.navigate(['/lightpet_edit',pet._id])
  }
}