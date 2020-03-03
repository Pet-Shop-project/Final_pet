import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Birds } from 'src/app/birds';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-heavy-details',
  templateUrl: './heavy-details.component.html',
  styleUrls: ['./heavy-details.component.css']
})
export class HeavyDetailsComponent implements OnInit {
  // [x: string]: any;

  public heavyid;
public birds=new Birds("", "",0,0,"",0,"",[""]);
  constructor(private getheavybirds:BirdsService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.heavyid=params.get("_id")
    })
     this.getheavybirds.heavydetails(this.heavyid).subscribe(data =>{
      this.birds=data;
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
  back(){
    this.router.navigate(['/heavy-birds'])
    }
}
  


