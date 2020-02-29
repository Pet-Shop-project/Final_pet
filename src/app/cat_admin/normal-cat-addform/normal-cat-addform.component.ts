import { Component, OnInit } from '@angular/core';
import { Cats } from "src/app/cats";
import { HeavtCatsService } from "src/app/services/heavt-cats.service";

@Component({
  selector: 'app-normal-cat-addform',
  templateUrl: './normal-cat-addform.component.html',
  styleUrls: ['./normal-cat-addform.component.css']
})
export class NormalCatAddformComponent implements OnInit {

  catModel=new Cats("","",0,0,"",0,"",[""])
  constructor(private getnew:HeavtCatsService) { }

  ngOnInit() {
  }
  onSubmit(){
   
    this.getnew.addnewnormalcat(this.catModel).subscribe(response =>{
      console.log('data saved',response)
   })
  }

}
