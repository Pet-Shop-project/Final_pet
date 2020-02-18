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
  constructor(private http:HttpClient) { }

  getlightpet():Observable<any>{
    return this.http.get<any>(this.light_api)

  }
  getlightdetails(light_id):Observable<any>{
    return this.http.get<any>(this.lightdetails_api+light_id )
  }

  getheavypet():Observable<Smallpets[]>{
    return this.http.get<Smallpets[]>(this.heavy_api)

  }
  getheavydetails(heavy_id):Observable<any>{
    return this.http.get<any>(this.heavydetails_api+heavy_id )
  }
  getnormalpet():Observable<Smallpets[]>{
    return this.http.get<Smallpets[]>(this.normal_api)

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


}
