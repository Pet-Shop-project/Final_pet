import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.css']
})
export class AllCatsComponent implements OnInit {
  public cats=[];
  collection = { count: this.cats.length, data: [] };
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
  constructor( private cat:HeavtCatsService , private router:Router) {
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

    this.cat.listallcats().subscribe(data=>{
      this.cats=data;
     
  })
}
onSelect(cat){
  this.router.navigate(['/all-cat-details',cat._id])
 
}
search(name){
  this.router.navigate(['/allcatsearch',name])

 
}


}
