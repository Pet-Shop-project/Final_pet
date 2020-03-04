import { Component, OnInit } from '@angular/core';
import { BirdsService } from 'src/app/services/birds.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Birds } from 'src/app/birds';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-normal-details',
  templateUrl: './normal-details.component.html',
  styleUrls: ['./normal-details.component.css']
})
export class NormalDetailsComponent implements OnInit {
  public normalid;
public birds=new Birds("", "",0,0,"",0,"",[""]);
  constructor(private getnormaldetails:BirdsService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }

  ngOnInit() {
    this.detailroute.paramMap.subscribe((params:ParamMap)=>{
      this.normalid=params.get("_id")
    })
     this.getnormaldetails.normaldetails(this.normalid).subscribe(data =>{
      this.birds=data;
     })
      
  }
  public addToCart(prductId,productPrice,productName,productImg){
    
    this.cartserv.cartProducting(prductId,productPrice,productName,productImg).subscribe(
      response => console.log('Add to cart', response),
      error => console.log('error',error)
      )
  }
  public addToWishlist(prductId,productPrice,productName,productImg){
    
    this.wishlist.cartProducting(prductId,productPrice,productName,productImg).subscribe(
      response => console.log('Add to Wishlist', response),
      error => console.log('error',error)
      )
  }
  back(){
    this.router.navigate(['/normal-birds'])
    }
}
  
