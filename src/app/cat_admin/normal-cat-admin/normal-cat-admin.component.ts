import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-normal-cat-admin',
  templateUrl: './normal-cat-admin.component.html',
  styleUrls: ['./normal-cat-admin.component.css']
})
export class NormalCatAdminComponent implements OnInit {

  constructor(private catsServ:HeavtCatsService,private router:Router) { }
  public cats=[];
  ngOnInit() {
    this.catsServ.get_normal_cats().subscribe(data=>{
      this.cats=data;
  })

  }


  onSelect(cat){
    this.router.navigate(['/normal-cats-details',cat._id])
   console.log(cat._id);
   
  }
  onSelect_norm(cat){
    this.router.navigate(['/normal-cat-edit',cat._id])
}
}
