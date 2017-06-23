import { NgModule, ModuleWithProviders } from '@angular/core';

import { NetworkStatusService } from '../services/network-status.service';

@NgModule({
    declarations: [],
    exports: []
})
export class NgNetworkStatusModule {

    /**
     * Use in AppModule: new instance of Ne
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgNetworkStatusModule,
            providers: [NetworkStatusService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: NgNetworkStatusModule,
            providers: [NetworkStatusService]
        };
    }

}
