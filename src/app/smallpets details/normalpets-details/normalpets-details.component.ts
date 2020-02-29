import { Component, OnInit } from '@angular/core';
import { Smallpets } from 'src/app/smallpets';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SmallpetServiceService } from 'src/app/services/smallpet-service.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-normalpets-details',
  templateUrl: './normalpets-details.component.html',
  styleUrls: ['./normalpets-details.component.css']
})
export class NormalpetsDetailsComponent implements OnInit {

  public normalid;
  public pet=new Smallpets("","",0,"","",0,"",[""]);
    constructor(private getnormalpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }
  
    ngOnInit() {
      this.detailroute.paramMap.subscribe((params:ParamMap)=>{
        this.normalid=params.get("_id")
      })
       this.getnormalpet.getnormaldetails(this.normalid).subscribe(data =>{
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
