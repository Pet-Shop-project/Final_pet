import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Smallpets } from '../smallpets'

@Injectable({
  providedIn: 'root'
})
export class SmallpetServiceService {
 public light_api='http://localhost:3000/PET-SHOP/light_pet/light/'
 public heavy_api='http://localhost:3000/PET-SHOP/heavy_pet/heavy'
 public normal_api='http://localhost:3000/PET-SHOP/normal_pet/normal'
 public all_api='http://localhost:3000/PET-SHOP/all_pet/whole'
 public lightdetails_api='http://localhost:3000/PET-SHOP/light_pet/details/'
 public heavydetails_api='http://localhost:3000/PET-SHOP/heavy_pet/details/'
 public normaldetails_api='http://localhost:3000/PET-SHOP/normal_pet/details/'
 public alldetails_api='http://localhost:3000/PET-SHOP/all_pet/details/'
 public light_api_sort='http://localhost:3000/PET-SHOP/sort/listpets_light'
 public hvy_api_sort='http://localhost:3000/PET-SHOP/sort/listpets_hvy'
 public norm_api_sort='http://localhost:3000/PET-SHOP/sort//listpets_norm'
  constructor(private http:HttpClient) { }
  private requestBody = JSON.stringify(status);
  getlightpet():Observable<any>{
    return this.http.get<any>(this.light_api)

  }
  getlightdetails(light_id):Observable<any>{
    return this.http.get<any>(this.lightdetails_api+light_id )
  }

  getheavypet():Observable<any>{
    return this.http.get<any>(this.heavy_api)

  }
  getheavydetails(heavy_id):Observable<any>{
    return this.http.get<any>(this.heavydetails_api+heavy_id )
  }
  getnormalpet():Observable<any>{
    return this.http.get<any>(this.normal_api)

  }
  getnormaldetails(normal_id):Observable<any>{
    return this.http.get<any>(this.normaldetails_api+normal_id )
  }

  getallpet():Observable<any>{
    return this.http.get<Smallpets[]>(this.all_api)
  }
  getalldetails(all_id):Observable<any>{
    return this.http.get<any>(this.alldetails_api+all_id )
  }
  updatelightpet(id,pets):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/light_pet/update/"+id,pets)
  }
  updatenormalpet(id,Smallpets):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/normal_pet/update/"+id,Smallpets)
  }
  updateheavypet(id,Smallpets):Observable<any>{
    return this.http.put("http://localhost:3000/PET-SHOP/heavy_pet/update/"+id,Smallpets) 
  }

  sortheavypet():Observable<any>{
    return this.http.get<any>(this.hvy_api_sort)

  }
  sortlightpet():Observable<any>{
    return this.http.get<any>(this.light_api_sort)

  }
  sortnormpet():Observable<any>{
    return this.http.get<any>(this.norm_api_sort)

  }
  search(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/all_pet/search/"+name)
  }
  lightsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/light_pet/search/"+name)
  }
  normalsearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normal_pet/search/"+name)
  }
  heavysearch(name):Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavy_pet/search/"+name)
  }
  addnewheavypet(Smallpets):Observable<any>{
    return this.http.post('http://localhost:3000/PET-SHOP/heavy_pet/addpet/',Smallpets)

  }
  addnewlightpet(Smallpets):Observable<any>{
    return this.http.post('http://localhost:3000/PET-SHOP/light_pet/addpet/',Smallpets)

  }
  addnewnormalpet(Smallpets):Observable<any>{
    return this.http.post('http://localhost:3000/PET-SHOP/normal_pet/addpet/',Smallpets)

  }
  deletenormalsmall(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/normal_pet/delete/"+id)
  }
  
   
  deleteheavysmall(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/heavy_pet/delete/"+id)
  }

  deletelightsmall(id){
    return this.http.delete<any>("http://localhost:3000/PET-SHOP/light_pet/delete/"+id)
  }

}
