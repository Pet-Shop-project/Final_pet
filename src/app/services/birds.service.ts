import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Birds } from '../birds'
@Injectable({
  providedIn: 'root'
})
export class BirdsService {
  constructor(private http:HttpClient) { }
  private requestBody = JSON.stringify(status);
  listlightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/list/")
  }
  listnormalbird():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/list/")
  }

listheavy():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/list/")
}
  listallbirds():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/list/") 
  }
  lightbirddetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/lightbirdsdetails/"+_id)
  }
  heavydetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/details/"+_id)
  }
  normaldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/details/"+_id)
  }
  alldetails(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/details/"+_id)
  }
  updatelightpet(id,Birds):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/lightbirds/update/"+id,Birds)
  }
  updatenormalpet(id,Birds):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/normalbirds/update/"+id,Birds)
  }
  updateheavypet(id,Birds):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/heavybirds/update/"+id,Birds)
  }
  sort_light_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_light")
  }
  sort_hevy_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_hvy")
  }
  sort_norm_birds(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listbirds_norm")
  }
  search(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allbirds/search/"+name)
  }
  lightsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/search/"+name)
  }
  normalsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/search/"+name)
  }
  heavysearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/search/"+name)
  }
  addnewheavybird(Birds):Observable<any>{
    return this.http.post("http://localhost:3000/PET-SHOP/heavybirds/addbird/",Birds)
  }
  addnewlightbird(Birds):Observable<any>{
    return this.http.post("http://localhost:3000/PET-SHOP/lightbirds/addbird/",Birds)
  }
  addnewnormalbird(Birds):Observable<any>{
    return this.http.post("http://localhost:3000/PET-SHOP/normalbirds/addbird/",Birds)
  }
  deletebird(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/heavybirds/delete/"+id)
  }
  deletenormaltbird(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/normalbirds/delete/"+id)
  }
    deletelightbird(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/lightbirds/delete/"+id)
  }
 
}
