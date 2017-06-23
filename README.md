# NG-NETWORK-HEALTH
[![Code Climate](https://codeclimate.com/github/Saka7/ng-network-health/badges/gpa.svg)](https://codeclimate.com/github/Saka7/ng-network-health)
[![Issue Count](https://codeclimate.com/github/Saka7/ng-network-health/badges/issue_count.svg)](https://codeclimate.com/github/Saka7/ng-network-health)


![ng-network-health](https://github.com/Saka7/ng-network-health/blob/master/logo.png)

**ng-network-health** will help you to add events when app is going on-line/off-line.

## Examples

![ng-network-health](https://j.gifs.com/Wn3ln4.gif)

## Usage

> Take a look at the [example project](https://github.com/Saka7/ng-network-health/tree/master/examples/network-health-examples)

### Install package

`npm install --save ng-network-health`

### Add NgNetworkHealthModule to your AppModule
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgNetworkHealthModule } from 'ng-network-health'; // <-- HERE

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgNetworkHealthModule // <-- and HERE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Use NetworkHealthService in your components
```typescript
import { Component, OnInit } from '@angular/core';

// Import NetworkHealthService
import { NetworkHealthService } from 'ng-network-health';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NetworkHealthService ]
})
export class AppComponent implements OnInit {

  networkStatus = "Online";

  // Inject NetworkHealthService instance
  constructor(private networkHealthService: NetworkHealthService) {}

  ngOnInit() {
    // Register health check
    this.networkHealthService.healthCheck();
    // Subscribe on network status change event
    this.networkHealthService.isOnline.subscribe(isOnline => {
      this.networkStatus = isOnline ? "Online" : "Offline";
    });
  }

}
```

### Available options
`healthCheck` method signature
```typescript
public healthCheck(interval: number, options: Options);
```

You can configure interval and grayscale effect options.
```typescript
this.networkHealthService.healthCheck(500, { grayscale: { enabled: false } });
```

### Default option values
Default interval is `1000ms` and default options is
```typescript
defaultOptions = {
  grayscale: {
    enabled: true,
    animationDuration: 0.3,
    percentage: 0.9
  }
};
```

## License
ng-network-health is released under the [MIT License](https://opensource.org/licenses/MIT).