import { Component, OnInit } from '@angular/core';
import { Dogs } from 'src/app/services/dogs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';


@Component({
  selector: 'app-heavydogsearch',
  templateUrl: './heavydogsearch.component.html',
  styleUrls: ['./heavydogsearch.component.css']
})
export class HeavydogsearchComponent implements OnInit {

  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router) { }
  public name;
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.dog.heavysearch(this.name).subscribe(data=>{
      this.dogs=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.dogs);
    })
  }
  back(){
    this.router.navigate(['/dogs/heavydogs'])
    }
    onSelect(dog){
      this.router.navigate(['/heavydogdetails',dog._id])
      
    }

}
