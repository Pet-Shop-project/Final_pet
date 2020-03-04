import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavy-birds',
  templateUrl: './heavy-birds.component.html',
  styleUrls: ['./heavy-birds.component.css']
})
export class HeavyBirdsComponent implements OnInit {
public birds=[];
public sortbirds=[]
public start_sort=false
collection = { count:this.birds.length, data: [] };
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
    this.bird.listheavy().subscribe(data=>{
      this.birds=data;
    })
  }
  showdetails(bird){
    this.route.navigate(["/heavy-details",bird._id])
    }

    on_click(){
      this.bird.sort_hevy_birds().subscribe(data=>{
        this.sortbirds=data;
         this.start_sort=true
      })
}
search(name){
  this.router.navigate(['/heavybirdssearch',name])
 
 
}
}

