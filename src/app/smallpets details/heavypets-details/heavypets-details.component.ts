import { Component, OnInit } from '@angular/core';
import { Smallpets } from 'src/app/smallpets';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-heavypets-details',
  templateUrl: './heavypets-details.component.html',
  styleUrls: ['./heavypets-details.component.css']
})
export class HeavypetsDetailsComponent implements OnInit {

  public heavyid;

  constructor(private getheavypet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }
public pet=new Smallpets("","",0,0,"",0,"",[""]);
 

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.heavyid=params.get("_id")
    })
     this.getheavypet.getheavydetails(this.heavyid).subscribe(data =>{
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
