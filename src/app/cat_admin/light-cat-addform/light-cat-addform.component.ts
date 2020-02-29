import { Component, OnInit } from '@angular/core';
import { Cats } from "src/app/cats";
import { HeavtCatsService } from "src/app/services/heavt-cats.service";

@Component({
  selector: 'app-light-cat-addform',
  templateUrl: './light-cat-addform.component.html',
  styleUrls: ['./light-cat-addform.component.css']
})
export class LightCatAddformComponent implements OnInit {

  catModel=new Cats("","",0,0,"",0,"",[""])
  constructor(private getnew:HeavtCatsService) { }

  ngOnInit() {
  }
  onSubmit(){
   
    this.getnew.addnewlightcat(this.catModel).subscribe(response =>{
      console.log('data saved',response)
   })
  }
}
