import { Component, OnInit } from '@angular/core';
import { Smallpets } from "src/app/smallpets";
import { SmallpetServiceService } from "src/app/services/smallpet-service.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-allpets-details',
  templateUrl: './allpets-details.component.html',
  styleUrls: ['./allpets-details.component.css']
})
export class AllpetsDetailsComponent implements OnInit {

  public allid;
  public pet=new Smallpets("","",0,"","",0,"",[""]);
    constructor(private getallpet:SmallpetServiceService,private detailroute:ActivatedRoute, private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }
  
    ngOnInit() {
      this.detailroute.paramMap.subscribe((params:ParamMap)=>{
        this.allid=params.get("_id")
        console.log(this.allid)
      })
       this.getallpet.getalldetails(this.allid).subscribe(data =>{
        this.pet=data;
       })   
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

