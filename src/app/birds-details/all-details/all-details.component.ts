import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';
import { Birds } from 'src/app/birds';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {
  birdcode: any;

  
  public allid;
public birds=new Birds("", "",0,0,"",0,"",[""]);
  constructor(private getallbirds:BirdsService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.allid=params.get("_id")
    })
     this.getallbirds.alldetails(this.allid).subscribe(data =>{
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
}


