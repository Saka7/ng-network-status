import { Component, OnInit } from '@angular/core';

import { NetworkHealthService } from 'ng-network-health';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NetworkHealthService ]
})
export class AppComponent implements OnInit {

  networkStatus = "Online";

  constructor(private networkHealthService: NetworkHealthService) {}

  ngOnInit() {
    this.networkHealthService.healthCheck();
    this.networkHealthService.isOnline.subscribe(isOnline => {
      this.networkStatus = isOnline ? "Online" : "Offline";
    });
  }

}
