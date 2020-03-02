import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normalpets',
  templateUrl: './normalpets.component.html',
  styleUrls: ['./normalpets.component.css']
})
export class NormalpetsComponent implements OnInit {

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
  constructor(private getnormalpet:SmallpetServiceService,private router:Router) {
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
    this.getnormalpet.getnormalpet().subscribe(data =>
      this.smallpet=data
     
    );
    console.log(this.smallpet)
  }
  showdetails(normal){
    this.router.navigate(["/normaldetail",normal._id])
    }
    on_click(){
      this.getnormalpet.sortnormpet().subscribe(data=>{
        this.sortpet=data;
         this.start_sort=true
      })

}
search(name){
  this.router.navigate(['/normalsmallpetsearch',name])
 console.log(name);
 
}
}
