import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Smallpets } from '../../smallpets';
import { from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-lightpets-details',
  templateUrl: './lightpets-details.component.html',
  styleUrls: ['./lightpets-details.component.css']
})
export class LightpetsDetailsComponent implements OnInit {
  public lightid;
public pet=new Smallpets("","",0,0,"",0,"",[""]);
  constructor(private getLightpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.lightid=params.get("_id")
    })
     this.getLightpet.getlightdetails(this.lightid).subscribe(data =>{
      this.pet=data;
     })
      // console.log(this.lightdetails)
  }
  public addToCart(prductId,productPrice,productName,productImg){
    console.log(prductId)
    this.cartserv.cartProducting(prductId,productPrice,productName,productImg).subscribe(
      response => console.log('Add to cart', response),
      error => console.log('error',error)
      )
  }

}
