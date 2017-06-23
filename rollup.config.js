import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Rx': 'Rx'
};

export default {
    entry: './dist/modules/ng-network-status.es5.js',
    dest: './dist/bundles/ng-network-status.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.NgNetworkStatus',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
