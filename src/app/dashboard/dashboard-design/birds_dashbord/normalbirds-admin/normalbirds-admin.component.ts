import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normalbirds-admin',
  templateUrl: './normalbirds-admin.component.html',
  styleUrls: ['./normalbirds-admin.component.css']
})
export class NormalbirdsAdminComponent implements OnInit {
  birds: any;

  constructor(private bird:BirdsService,private route:Router) { }

  ngOnInit() {
    this.bird.listnormalbird().subscribe(data=>{
      this.birds=data;
      
    })
  
  }
  delete(bird){
    this.bird.deletenormaltbird(bird._id).subscribe(data=>{
     
     })
    }
  showdetails(bird){
    this.route.navigate(["/normal-details",bird._id])
    }
    onSelect_normal(bird){
      this.route.navigate(['/normalbird_edit',bird._id])
  }
}
  

