![ng-network-status](https://raw.githubusercontent.com/Saka7/ng-network-status/master/logo.png)

# NG-NETWORK-STATUS
[![Code Climate](https://codeclimate.com/github/Saka7/ng-network-status/badges/gpa.svg)](https://codeclimate.com/github/Saka7/ng-network-status)
[![Issue Count](https://codeclimate.com/github/Saka7/ng-network-status/badges/issue_count.svg)](https://codeclimate.com/github/Saka7/ng-network-status)


[![NPM](https://nodei.co/npm/ng-network-status.png)](https://nodei.co/npm/ng-network-status/)
[![NPM](https://nodei.co/npm-dl/ng-network-status.png?months=6)](https://nodei.co/npm/ng-network-status/)


**ng-network-status** will help you to add events when app is going online/offline.

## Examples

![ng-network-status-debian](https://j.gifs.com/j2oAoy.gif)

-----

<img src="https://j.gifs.com/JZvE0K.gif" alt="ng-network-status-android" width="380px"/>

## Usage

> Take a look at the [example project](https://github.com/Saka7/ng-network-status/tree/master/examples/network-status-examples)

### Install package

`npm install --save ng-network-status`

### Add NgNetworkStatusModule to your AppModule
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgNetworkStatusModule } from 'ng-network-status'; // <-- HERE

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNetworkStatusModule // <-- and HERE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use NetworkStatusService in your components
```javascript
import { Component, OnInit } from '@angular/core';

// Import NetworkStatusService
import { NetworkStatusService } from 'ng-network-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NetworkStatusService ]
})
export class AppComponent implements OnInit {

  networkStatus = "Online";

  // Inject NetworkStatusService instance
  constructor(private networkStatusService: NetworkStatusService) {}

  ngOnInit() {
    // Register health check
    this.networkStatusService.healthCheck();
    // Subscribe on network status change event
    this.networkStatusService.isOnline.subscribe(isOnline => {
      this.networkStatus = isOnline ? "Online" : "Offline";
    });
  }

}
```

### Available options
`healthCheck` method signature
```javascript
public healthCheck(interval: number, options: Options);
```

You can configure interval and grayscale effect options.
```javascript
this.networkStatusService.healthCheck(500, {
  grayscale: {
    enabled: false
  }
});
```

### Default option values
Default interval is `1000ms` and default options is
```javascript
defaultOptions = {
  grayscale: {
    enabled: true,
    animationDuration: 0.3,
    percentage: 0.9
  }
};
```

## License
ng-network-status is released under the [MIT License](https://opensource.org/licenses/MIT).