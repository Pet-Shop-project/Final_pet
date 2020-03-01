import { Component, OnInit } from '@angular/core';
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-lightpets',
  templateUrl: './lightpets.component.html',
  styleUrls: ['./lightpets.component.css']
})
export class LightpetsComponent implements OnInit {
  
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
  constructor(private getLightpet:SmallpetServiceService,private router:Router) {
    
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
    this.getLightpet.getlightpet().subscribe(data =>
      this.smallpet=data
     
    );
    console.log(this.smallpet)
  }
  showdetails(light){
    this.router.navigate(["/lightdetail",light._id])
    }
    on_click(){
      this.getLightpet.sortlightpet().subscribe(data=>{
        this.sortpet=data;
         this.start_sort=true
      })
}
search(name){
  this.router.navigate(['/lightsmallpetsearch',name])
 console.log(name);
 
}
}
