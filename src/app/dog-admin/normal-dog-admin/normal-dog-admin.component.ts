import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-dog-admin',
  templateUrl: './normal-dog-admin.component.html',
  styleUrls: ['./normal-dog-admin.component.css']
})
export class NormalDogAdminComponent implements OnInit {

  constructor(private dog:DogsService , private router:Router) { }
  public dogs=[]; 
  ngOnInit() {
    this.dog.listnormaldog().subscribe(data=>{
      this.dogs=data;
      console.log(data);
    })
  }
  onSelect_normal(dog){
    this.router.navigate(['/normal-dog-edit',dog._id])
}
}
