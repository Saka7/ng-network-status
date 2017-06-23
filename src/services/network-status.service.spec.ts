import { inject, TestBed } from '@angular/core/testing';

import { NetworkStatusService } from './network-status.service';

describe('NetworkStatusService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NetworkStatusService
            ]
        });
    });

    it('should return true when app is online',
      inject([NetworkStatusService], (networkStatusService: NetworkStatusService) => {
      
      spyOn(window.navigator, 'onLine').and.returnValue(true);
      console.log(networkStatusService);
      networkStatusService.isOnline.subscribe(isOnline => {
        expect(isOnline).toBeTruthy();
        done();
      });

    }));

    it('should return false when app is offline',
      inject([NetworkStatusService], (networkStatusService: NetworkStatusService) => {

      spyOn(window.navigator, 'onLine').and.returnValue(false);
      networkStatusService.isOnline.subscribe(isOnline => {
        expect(isOnline).toBeFalsy();
        done();
      });

    }));

});
