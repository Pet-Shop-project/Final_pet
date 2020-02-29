import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dogs } from 'src/app/services/dogs';

@Component({
  selector: 'app-alldogsearch',
  templateUrl: './alldogsearch.component.html',
  styleUrls: ['./alldogsearch.component.css']
})
export class AlldogsearchComponent implements OnInit {
  public name;
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);
  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.dog.search(this.name).subscribe(data=>{
      this.dogs=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.dogs);
    })
  }
  back(){
    this.router.navigate(['/dogs/alldogs'])
    }
    onSelect(dog){
      this.router.navigate(['/alldogdetails',dog._id])
      console.log(dog._id)
    }

}
