import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Dogs } from '../dogs'
@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http:HttpClient) { }
  private requestBody = JSON.stringify(status);
  listlightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/list/")
  }
  listnormaldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/list/")
  }
  listheavydog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/list/")
  }
  listalldog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/list/")
  }
  lightdogdetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/lightdogdetails/"+_id)
  }
  heavydetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/details/"+_id)
  }
  normaldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/details/"+_id)
  }
  alldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/details/"+_id)
  }
  search(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/alldogs/search/"+name)
  }
  lightsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/search/"+name)
  }
  normalsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/search/"+name)
  }
  heavysearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/search/"+name)
  }
    updatelightpet(id,dogs){
    return this.http.put("http://localhost:3000/PET-SHOP/lightdogs/update/"+id,dogs)
  }
  updatenormalpet(id,dogs):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/normaldogs/update/"+id,dogs)
  }
  updateheavypet(id,dogs){
    return this.http.put("http://localhost:3000/PET-SHOP/heavydogs/update/"+id,dogs)
  }
  sort_hvyd(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listdog_heavy")
  }
  sort_lightd(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listdog_light")
  }
  sort_normd(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listdog_norm")
  }
  addnewdog(Dogs):Observable<any>{
    return this.http.post<any>("http://localhost:3000/PET-SHOP/heavydogs/adddog/",Dogs)
  }
  addnewlightdog(Dogs):Observable<any>{
    return this.http.post<any>("http://localhost:3000/PET-SHOP/lightdogs/adddog/",Dogs)
  }
  addnewnormaldog(Dogs):Observable<any>{
    return this.http.post<any>("http://localhost:3000/PET-SHOP/normaldogs/adddog/",Dogs)
  }
  deleteheavydog(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/heavydogs/delete/"+id)
  }
  deletelightdog(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/lightdogs/delete/"+id)
  }
  deletenormaldog(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/normaldogs/delete/"+id)
  }

}
