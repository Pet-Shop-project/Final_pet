import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cats} from '../cats'

@Injectable({
  providedIn: 'root'
})
export class HeavtCatsService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  private requestBody = JSON.stringify(status);
  get_heavy_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavy_cats/listcat/");
 
  }

  //light
  get_light_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/light_cats/listcat/");
 
  }

  get_normal_cats():Observable<any>{
    
    
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normal_cats/listcat/");
 
  }


  get_normal_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/normal_cats/details/'+_id);
  }



  heavy_cats_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/heavy_cats/details/'+_id);
  }

  

  light_cats_details(_id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/PET-SHOP/light_cats/details/'+_id);
  }

  listallcats():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allcats/list/")
  }
  all_details(_id){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/allcats/details/"+_id)
  }
  updatelightpet(id,Cats){
    return this.http.put("http://localhost:3000/PET-SHOP/light_cats/update/"+id,Cats)
  }
  updatenormalpet(id,Cats){
    return this.http.put("http://localhost:3000/PET-SHOP/normal_cats/update/"+id,Cats)
  }
  updateheavypet(id,Cats){
    return this.http.put("http://localhost:3000/PET-SHOP/heavy_cats/update/"+id,Cats)
  }

addnewheavycat(Cats):Observable<any>{
  return this.http.post<any>("http://localhost:3000/PET-SHOP/heavy_cats/addheavycat/",Cats)
}

sort_heavy_cat():Observable<any>{

    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort-heavycat");

}
    
    
random_light_cat():Observable<any>{
    
  return this.http.get<any>('http://localhost:3000/PET-SHOP/light_cats/random');

}

random_heavy_cat():Observable<any>{
    
  return this.http.get<any>('http://localhost:3000/PET-SHOP/heavy_cats/random');

}
random_normal_cat():Observable<any>{
    
  return this.http.get<any>('http://localhost:3000/PET-SHOP/normal_cats/random');

}
random_lightd():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightdogs/random")
  }
  random_heavydog():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavydogs/random")

}

random_normaldog():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/normaldogs/random")
}
random_lightb():Observable<any>{
  return this.http.get<any>("http://localhost:3000/PET-SHOP/lightbirds/random")
  }
  random_heavy():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavybirds/random")
  }
  random_normalbird():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normalbirds/random")
  }
  random_heavyb():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/heavy_pet/random")
  }
  random_lightpet():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/light_pet/random")
  }
  random_normpet():Observable<any>{
    return this.http.get<any>("http://localhost:3000/PET-SHOP/normal_pet/random")
  }

  sort(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listcat_heavy")
  }
  sort_lightc(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listcat_light")

  }
  sort_normalc(){
    return this.http.get<any>("http://localhost:3000/PET-SHOP/sort/listcat_normal")

  }
}
