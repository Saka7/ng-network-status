import { inject, TestBed } from '@angular/core/testing';

import { NetworkHealthService } from './../../index';

describe('NetworkHealthService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NetworkHealthService
            ]
        });
    });

});
