import { Component, OnInit } from '@angular/core';

import { NetworkStatusService } from 'ng-network-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NetworkStatusService ]
})
export class AppComponent implements OnInit {

  networkStatus = "Online";

  constructor(private networkStatusService: NetworkStatusService) {}

  ngOnInit() {
    this.networkStatusService.healthCheck();
    this.networkStatusService.isOnline.subscribe(isOnline => {
      this.networkStatus = isOnline ? "Online" : "Offline";
    });
  }

}
