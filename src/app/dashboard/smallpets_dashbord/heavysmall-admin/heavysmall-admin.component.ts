import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';

@Component({
  selector: 'app-heavysmall-admin',
  templateUrl: './heavysmall-admin.component.html',
  styleUrls: ['./heavysmall-admin.component.css']
})
export class HeavysmallAdminComponent implements OnInit {
  
  public pets:[];
  constructor(private getheavypet:SmallpetServiceService,private router:Router) { }

  ngOnInit() {
    this.getheavypet.getheavypet().subscribe(data =>
      this.pets=data
     
     
    );
  }
  delete(pet){
    this.getheavypet.deleteheavysmall(pet._id).subscribe(data=>{
       
     })
     
   }
  showdetails(heavy){
    this.router.navigate(["/heavysmall-admin",heavy._id])
    }
    onSelect_heavy(pet){
      this.router.navigate(['/heavypet_edit',pet._id])
  }
}