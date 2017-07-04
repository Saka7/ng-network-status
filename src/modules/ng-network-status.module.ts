import { NgModule, ModuleWithProviders } from '@angular/core';

import { NetworkStatusService } from '../services/network-status.service';

@NgModule({
    declarations: [],
    exports: []
})
export class NgNetworkStatusModule {

    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgNetworkStatusModule,
            providers: [NetworkStatusService]
        };
    }

    public static forChild(): ModuleWithProviders {
        return {
            ngModule: NgNetworkStatusModule,
            providers: [NetworkStatusService]
        };
    }

}
