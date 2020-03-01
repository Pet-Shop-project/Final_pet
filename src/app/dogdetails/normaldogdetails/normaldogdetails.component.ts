import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dogs } from 'src/app/services/dogs';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-normaldogdetails',
  templateUrl: './normaldogdetails.component.html',
  styleUrls: ['./normaldogdetails.component.css']
})
export class NormaldogdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private dog:DogsService , private router:Router,private cartserv:CartService,private wishlist:WishlistService) { }
  public dogcode;
  public dogs = new Dogs("","",0,0,"",0,"",[""]);
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.dogcode=params.get('_id');
      console.log(typeof(params.get("_id")))
    });
    this.dog.normaldetails(this.dogcode).subscribe(data=>{
      this.dogs=data;
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
  back(){
    this.router.navigate(['/dogs/normaldogs'])
    }
}
