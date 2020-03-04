import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';

@Component({
  selector: 'app-all-birds',
  templateUrl: './all-birds.component.html',
  styleUrls: ['./all-birds.component.css']
})
export class AllBirdsComponent implements OnInit {

public birds=[];
collection = { count: this.birds.length, data: [] };
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
  constructor(private bird:BirdsService,private route:Router,private router:Router) {
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
    this.bird.listallbirds().subscribe(data=>{
      this.birds=data;
      
    })
  
  }
  showdetails(bird){
    this.route.navigate(["/all-details",bird._id])
    }
    search(name){
      this.router.navigate(['/allbirdssearch',name])
     
     
    }
  }

  

  


