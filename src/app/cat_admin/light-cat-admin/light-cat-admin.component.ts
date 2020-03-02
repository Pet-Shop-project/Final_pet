import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-light-cat-admin',
  templateUrl: './light-cat-admin.component.html',
  styleUrls: ['./light-cat-admin.component.css']
})
export class LightCatAdminComponent implements OnInit {

  constructor(private catsServ:HeavtCatsService,private router:Router) { }
  public cats=[];
  ngOnInit() {

    this.catsServ.get_light_cats().subscribe(data=>{
      this.cats=data;
  })
  }
  delete(cats){
    this.catsServ.deletelightcats(cats._id).subscribe(data=>{
       console.log('cat deleted')
      // this.bird=data
     })
     
   }

  onSelect(cat){
    this.router.navigate(['/light-cats-details',cat._id])
   console.log(cat._id);
   
  }
  onSelect_light(cat){
    this.router.navigate(['/light-cat-edit',cat._id])
}
}
