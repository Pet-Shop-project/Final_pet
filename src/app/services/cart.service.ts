import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Cart } from '../cart'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  cartProducting(prductId,productPrice,productName,productImg):Observable<any>{
    console.log(prductId)
    return this.http.get('http://localhost:3000/PET-SHOP/shopcart/add/'+prductId+'/'+productPrice+'/'+productName+'?img='+productImg,{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  cartProductsDetails():Observable<any>{
    return this.http.get('http://localhost:3000/PET-SHOP/shopcart/details',{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  deleteCart(id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/shopcart/deleteItem/'+id,{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  clearCart():Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/shopcart/clear',{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
    
  }
}
