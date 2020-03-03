import { Component, OnInit } from '@angular/core';
import {Cats} from '../../cats'
import {HeavtCatsService} from '../../services/heavt-cats.service'
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-light-cats-details',
  templateUrl: './light-cats-details.component.html',
  styleUrls: ['./light-cats-details.component.css']
})
export class LightCatsDetailsComponent implements OnInit {

  constructor(private catServ:HeavtCatsService,
    private router:Router,private route:ActivatedRoute,private cartserv:CartService,private wishlist:WishlistService) { }
    public code;
    public ID;
  
    public cat=new Cats ("","",0,0,"",0,"",['']);
  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });


     this.catServ.light_cats_details(this.code).subscribe(data=>{
      this.cat=data;
      this.ID=this.code.slice(0,9);
      console.log(this.cat);
    })
  }


  
  back()
  {
   this.router.navigate(['/light-cats']);

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
