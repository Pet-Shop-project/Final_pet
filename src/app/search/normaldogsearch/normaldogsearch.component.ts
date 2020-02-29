import { Component, OnInit } from '@angular/core';
import { Dogs } from 'src/app/services/dogs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';

@Component({
  selector: 'app-normaldogsearch',
  templateUrl: './normaldogsearch.component.html',
  styleUrls: ['./normaldogsearch.component.css']
})
export class NormaldogsearchComponent implements OnInit {
  public name;
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);

  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });
     this.dog.normalsearch(this.name).subscribe(data=>{
      this.dogs=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.dogs);
    })
  }
  back(){
    this.router.navigate(['/dogs/normaldogs'])
    }
    onSelect(dog){
      this.router.navigate(['/normaldogdetails',dog._id])
      console.log(dog._id)
    }

}
