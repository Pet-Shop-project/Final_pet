import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavypets',
  templateUrl: './heavypets.component.html',
  styleUrls: ['./heavypets.component.css']
})
export class HeavypetsComponent implements OnInit {
  public smallpet=[]
  public sortpet=[]
public start_sort=false
  

  collection = { count: this.smallpet.length, data: [] };
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
  constructor(private getheavypet:SmallpetServiceService,private router:Router) { 
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
    this.getheavypet.getheavypet().subscribe(data =>
      this.smallpet=data
     
    );
    // console.log(this.lightsmallpet)
  }
  showdetails(heavy){
    this.router.navigate(["/heavydetail",heavy._id])
    }
    on_click(){
      this.getheavypet.sortheavypet().subscribe(data=>{
        this.sortpet=data;
         this.start_sort=true
      })
}}
