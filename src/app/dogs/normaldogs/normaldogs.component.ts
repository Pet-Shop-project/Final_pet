import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normaldogs',
  templateUrl: './normaldogs.component.html',
  styleUrls: ['./normaldogs.component.css']
})
export class NormaldogsComponent implements OnInit {
  collection = { count: 15, data: [] };
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
  constructor(private dog:DogsService , private router:Router) { 
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
  
  public dogs=[]; 
  public sortdog=[]
public start_sort=false
  ngOnInit() {
    this.dog.listnormaldog().subscribe(data=>{
      this.dogs=data;
      console.log(data);
    })
  }
  onSelect(dog){
    this.router.navigate(['/normaldogdetails',dog._id])
    console.log(dog._id)
  }
  search(name){
    this.router.navigate(['/normaldogsearch',name])
   console.log(name);
   
  }
  on_click(){
    this.dog.sort_normd().subscribe(data=>{
      this.sortdog=data;
       this.start_sort=true
    })

}}
