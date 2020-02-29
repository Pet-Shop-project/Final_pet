import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BirdsService } from 'src/app/services/birds.service';
import { Birds } from 'src/app/birds';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-lightl-details',
  templateUrl: './lightl-details.component.html',
  styleUrls: ['./lightl-details.component.css']
})
export class LightlDetailsComponent implements OnInit {
  [x: string]: any;
  
  


  public lightid;
public birds=new Birds("", "",0,0,"",0,"",[""]);
  constructor(private wishlist:WishlistService,private getlightbirds:BirdsService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.lightid=params.get("_id")
    })
     this.getlightbirds.lightbirddetails(this.lightid).subscribe(data =>{
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

