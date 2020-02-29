import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }
  cartProducting(prductId,productPrice,productName,productImg):Observable<any>{
    console.log(prductId)
    return this.http.get('http://localhost:3000/PET-SHOP/wishlist/add/'+prductId+'/'+productPrice+'/'+productName+'?img='+productImg,{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  cartProductsDetails():Observable<any>{
    return this.http.get('http://localhost:3000/PET-SHOP/wishlist/details',{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  deleteCart(id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/wishlist/deleteItem/'+id,{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
  }
  clearCart():Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/wishlist/clear',{
      observe :'body',   
      params : new HttpParams().append('token',localStorage.getItem('token'))})
    
  }
}
