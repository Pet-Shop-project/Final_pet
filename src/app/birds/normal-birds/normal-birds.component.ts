import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-birds',
  templateUrl: './normal-birds.component.html',
  styleUrls: ['./normal-birds.component.css']
})
export class NormalBirdsComponent implements OnInit {
  
 public birds= [];
 collection = { count: 14, data: [] };
 config = {
   id: 'custom',
   itemsPerPage: 3,
   currentPage: 1,
   totalItems: this.collection.count
 };
 
 public maxSize: number = 3;
 public directionLinks: boolean = true;
 public autoHide: boolean = false;
 public responsive: boolean = true;
 public labels: any = {
     previousLabel: 'prev',
     nextLabel: 'next',
     screenReaderPaginationLabel: 'Pagination',
     screenReaderPageLabel: 'page',
     screenReaderCurrentLabel: `You're on page`
 };
  constructor(private bird:BirdsService,private route:Router) { 
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
  }
  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
   }
  

  ngOnInit() {
    this.bird.listnormalbird().subscribe(data=>{
      this.birds=data;
      console.log(data)
    })
  
  }
  showdetails(bird){
    this.route.navigate(["/normal-details",bird._id])
    }
}
  

