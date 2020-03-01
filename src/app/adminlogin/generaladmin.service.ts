import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneraladminService {
  UserId : number
  UserType : string
  ModalError :string 
  Registeradmin : boolean= false
  authorized : boolean= false
  constructor(private http:HttpClient) { }
  SetError(Error : string)
  {
     this.ModalError = Error;
  }
  GetError()
  {
     return this.ModalError ;
  }
  GetUser ()
  {
   return this.http.get('http://localhost:3000/PET-SHOP/admin/Username',{
   observe :'body',   
   params : new HttpParams().append('Admintoken',localStorage.getItem('Admintoken'))});
  }
}
