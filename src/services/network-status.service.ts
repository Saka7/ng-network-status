import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

/**
* NetworkStatusService helps you to add events when app is going on-line/off-line
*/
@Injectable()
export class NetworkStatusService {

  private networkStatus: Observable<boolean>;

  private defaultOptions = {
    grayscale: {
      enabled: true,
      animationDuration: 0.3,
      percentage: 0.9
    }
  };

  /**
  * Register network availability checking 
  * @param interval network availability checking interval
  * @default 1000 ms
  * @param options allows adding grayscale effect when app is off-line
  * @default grayscale.enable=true,
  * grayscale.animationDuration=0.3,
  * grayscale.percentage=0.9
  */
  public healthCheck(interval=1000, options=this.defaultOptions) {
      this.registerNetworkHealthChecker(interval, options);
  }

  private registerNetworkHealthChecker(interval: number, options: Options) {
    this.networkStatus = Observable
      .interval(interval)
      .timeInterval()
      .map(() => {
        if(window.navigator.onLine) {
          if(options.grayscale.enabled) {
            this.removeGrayScaleEffect(options.grayscale.animationDuration);
          }
          return true;
        } else {
          if(options.grayscale.enabled) {
            this.addGrayScaleEffect(options.grayscale.percentage,
              options.grayscale.animationDuration);
          }
          return false;
        };
      });
  }

  /**
  * Network status Observable
  * @return isOnline boolean observable which represents network status
  */
  get isOnline(): Observable<boolean> {
    return this.networkStatus;
  }

  private addGrayScaleEffect(percentage: number, animationDuration: number) {
    document.body.style.filter = `grayscale(${percentage})`;
    document.body.style.transition = `filter ${animationDuration}s ease-in-out`;
  }

  private removeGrayScaleEffect(animationDuration: number) {
    document.body.style.filter = 'grayscale(0)';
    document.body.style.transition = `filter ${animationDuration}s ease-in-out`;
  }

}

interface Options {
  grayscale: {
    enabled: boolean,
    animationDuration: number,
    percentage: number
  }
}