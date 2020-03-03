import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject  } from 'rxjs';
import { Accessories } from '../accessories'
@Injectable({
  providedIn: 'root'
})
export class AccessoriesService { 
  
private myMessage = new Subject<any>();
private requestBody = JSON.stringify(status);
  constructor(private http:HttpClient) { }
  listaccessories():Observable<any>{
    return this.http.get("http://localhost:3000/PET-SHOP/accessories/list/")
  }
 updatepet(id,access):Observable<any>{
   return this.http.put("http://localhost:3000/PET-SHOP/accessories/update/"+id,access)
 }
  addnewaccessory(Accessories):Observable<any>{
    return this.http.post("http://localhost:3000/PET-SHOP/accessories/add",Accessories)
  }
  search(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/accessories/search/"+name)
  }
  deleteaccessories(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/accessories/delete/"+id)
  }

  
}
