import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavybirds-admin',
  templateUrl: './heavybirds-admin.component.html',
  styleUrls: ['./heavybirds-admin.component.css']
})
export class HeavybirdsAdminComponent implements OnInit {
  birds: any;

  constructor(private bird:BirdsService,private route:Router) { }

  
  ngOnInit() {
    this.bird.listheavy().subscribe(data=>{
      this.birds=data;
      // console.log(data)
    })
  }
  showdetails(bird){
    this.route.navigate(["/heavybirds_admin",bird._id])
    }
    onSelect_heavy(bird){
      this.route.navigate(['/heavybird_edit',bird._id])
  }
}



