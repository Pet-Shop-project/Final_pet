import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightbirds-admin',
  templateUrl: './lightbirds-admin.component.html',
  styleUrls: ['./lightbirds-admin.component.css']
})
export class LightbirdsAdminComponent implements OnInit {
  birds: any;

  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listlightd().subscribe(data=>{
      this.birds=data;
     
    })
  }
  delete(bird){
    this.bird.deletelightbird(bird._id).subscribe(data=>{
      
     })
     
   }
  showdetails(bird){
    this.route.navigate(["/light-details",bird._id])
    }
    onSelect_light(bird){
      this.route.navigate(['/lightbird_edit',bird._id])
  }
}
  



