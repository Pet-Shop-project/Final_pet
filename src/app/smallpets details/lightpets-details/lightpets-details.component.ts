import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { Smallpets } from '../../smallpets';
import { from } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-lightpets-details',
  templateUrl: './lightpets-details.component.html',
  styleUrls: ['./lightpets-details.component.css']
})
export class LightpetsDetailsComponent implements OnInit {
  public lightid;

  constructor(private getLightpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }
public pet=new Smallpets("","",0,0,"",0,"",[""]);
 

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
  public addToWishlist(prductId,productPrice,productName,productImg){
    console.log(prductId)
    this.wishlist.cartProducting(prductId,productPrice,productName,productImg).subscribe(
      response => console.log('Add to Wishlist', response),
      error => console.log('error',error)
      )
  }

}
