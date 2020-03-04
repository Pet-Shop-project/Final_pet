import { Component } from '@angular/core';
import { SocketConnectionService } from "src/app/services/socket-connection.service";

import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spinner: NgxSpinnerService,private socketserv:SocketConnectionService) { }
  title = 'pet-shop';

  
  ngOnInit() {
    this.socketserv.sockconnect()
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 4000);
  
  }

}
