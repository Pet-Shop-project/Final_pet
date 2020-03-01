import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-light-cats',
  templateUrl: './light-cats.component.html',
  styleUrls: ['./light-cats.component.css']
})
export class LightCatsComponent implements OnInit {
  public cats=[]; 
  collection = { count: this.cats.length, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: this.collection.count
  };
 
  public sortCat=[]
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
  constructor(private catsServ:HeavtCatsService,private router:Router) { 
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
  
  
  public start_sort=false
  ngOnInit() {
    this.catsServ.get_light_cats().subscribe(data=>{
      this.cats=data;
  })
  }

  onSelect(cat){
    this.router.navigate(['/light-cats-details',cat._id])
   console.log(cat._id);
   
  }
  on_click(){
    this.catsServ.sort_lightc().subscribe(data=>{
      this.sortCat=data;
       this.start_sort=true
    })
 
}
search(name){
  this.router.navigate(['/lightcatsearch',name])
 console.log(name);
 
}

}
