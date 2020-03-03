import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from "src/app/services/accessories.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-accessories-admin',
  templateUrl: './accessories-admin.component.html',
  styleUrls: ['./accessories-admin.component.css']
})
export class AccessoriesAdminComponent implements OnInit {

  constructor(private acc:AccessoriesService,private router:Router) { }
  public accessories=[];
  ngOnInit() {
    this.acc.listaccessories().subscribe(data=>{
      this.accessories=data;
    console.log(data);

    })
  }
  
  onSelect(accessory){
    this.router.navigate(['access-edit',accessory._id])
}
remove(accss){
  this.acc.deleteaccessories(accss._id).subscribe(data=>{
    console.log('accssess delete')
    // this.accessories=data
  })
}

}




