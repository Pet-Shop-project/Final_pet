import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heavy-dog-admin',
  templateUrl: './heavy-dog-admin.component.html',
  styleUrls: ['./heavy-dog-admin.component.css']
})
export class HeavyDogAdminComponent implements OnInit {
  constructor(private dog:DogsService , private router:Router) { }
  public dogs=[];
  ngOnInit() {
    this.dog.listheavydog().subscribe(data=>{
      this.dogs=data;
      console.log(data);

    })
  }
  onSelect_heavy(dog){
    this.router.navigate(['/heavy-dog-edit',dog._id])
}
}
