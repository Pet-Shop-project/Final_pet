import { Component } from '@angular/core';
import { SocketConnectionService } from "src/app/services/socket-connection.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet-shop';
  constructor(private socketserv:SocketConnectionService){}
  ngOnInit(){
    this.socketserv.sockconnect()
  }
}
