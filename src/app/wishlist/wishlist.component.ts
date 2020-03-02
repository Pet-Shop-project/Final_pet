import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Wishlist } from '../wishlist'

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public productsInCart : Wishlist[]=[]
  public cartInfo: Wishlist[]=[];
  public product_id;
  public product={}
  public noProducts:String;
  public total:Number=0;

  constructor(private cartserv:WishlistService,private router:Router,private LogServ : LoginService) { 
    if(this.LogServ.auth()){
      console.log(this.LogServ.auth())
      this.cartserv.cartProductsDetails().subscribe(data=>{
        if(data!=null){
          this.productsInCart=data as Wishlist[];
          console.log(this.productsInCart)
          this.productsInCart.forEach(element => {
           this.total=+(this.total)+(+(element.totalPrice)); 
          });
          this.cartInfo=data;
          console.log(data)
        } 
        else{
          this.noProducts="Cart still Empty"
          
        }
      }
      );
    }
    else{
      this.router.navigate(['/user/Login'])

    }
  }
  

  ngOnInit() {
  }
  clearAllOfTheCart(){
    this.cartserv.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }
  delete(){
    this.cartserv.deleteCart(this.product_id).subscribe(data=>{
      console.log("you deleted this item")
    })
  }
}
