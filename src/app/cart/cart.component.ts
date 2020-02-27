import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {Cart} from '../cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cart=[];
  public productsInCart : Cart[]=[]
  public cartInfo: Cart[]=[];
  public product_id;
  public product={}
  public noProducts;
  public total:Number=0;
  constructor(private cartserv:CartService,private router:Router,private LogServ : LoginService) {
    if(this.LogServ.auth()){
      console.log(this.LogServ.auth())
      this.cartserv.cartProductsDetails().subscribe(data=>{
        if(data!=null){
          this.productsInCart=data as Cart[];
          console.log(this.productsInCart)
          this.productsInCart.forEach(element => {
           this.total=+(this.total)+(+(element.totalPrice));
            
          });
          this.cartInfo=data;
          console.log(data)
        } else{
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
    // this.cartserv.getCart().subscribe(data =>{
    //   this.cart=data;
    //   console.log(typeof(data));
    //   console.log(data)

    // })
  }
  // deleteCartItem(itemId){
  //   this.router.navigate(['/cart',itemId]);
  //   this.cartserv.postDeleteCart(itemId).subscribe(()=>{
  //     console.log('deleted');
      
  //   })
  // }
  clearAllOfTheCart(){
    this.cartserv.clearCart().subscribe(data=>console.log("you've cleared your cart"))
  }
  delete(){
    this.cartserv.deleteCart(this.product_id).subscribe(data=>{
      console.log("you deleted this item")
    })
  }

}
