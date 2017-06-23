import { NgModule, ModuleWithProviders } from '@angular/core';

import { NetworkHealthService } from '../services/network-health.service';

@NgModule({
    declarations: [],
    exports: []
})
export class NgNetworkHealthModule {

    /**
     * Use in AppModule: new instance of Ne
     */
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgNetworkHealthModule,
            providers: [NetworkHealthService]
        };
    }

    /**
     * Use in features modules with lazy loading: new instance of SumService.
     */
    public static forChild(): ModuleWithProviders {
        return {
            ngModule: NgNetworkHealthModule,
            providers: [NetworkHealthService]
        };
    }

}
