import { Component, OnInit } from '@angular/core';
import {HeavtCatsService} from '../../services/heavt-cats.service'
import {Router} from '@angular/router'
import { NavbarDashboardService } from '../../services/navbar-dashboard.service'
@Component({
  selector: 'app-heavy-cat-admin',
  templateUrl: './heavy-cat-admin.component.html',
  styleUrls: ['./heavy-cat-admin.component.css']
})
export class HeavyCatAdminComponent implements OnInit {
  visible: boolean;
  constructor(private catsServ:HeavtCatsService,private router:Router,public navDash: NavbarDashboardService) { }
  public cats=[];
  ngOnInit() {
    this.navDash.show()


    this.catsServ.get_heavy_cats().subscribe(data=>{
      this.cats=data;
  })
  }



  onSelect(cat){
    this.router.navigate(['/heavy-cats-details',cat._id])
   console.log(cat._id);
   
  }
  onSelect_heavy(cat){
    this.router.navigate(['/heavy-cat-edit',cat._id])
}
}
