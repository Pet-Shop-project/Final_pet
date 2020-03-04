import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketConnectionService {
  private url = 'http://localhost:3000';
  private socket;    
  constructor() {
    this.socket = io(this.url);
   }
   deletepet(data){
     this.socket.emit('deleteEvent',data);
   }
   sockconnect(){
     this.socket.on('connect',()=>{
       console.log('connected')
     })
   }
}
