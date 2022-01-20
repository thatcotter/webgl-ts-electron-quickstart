var path = require('path');

module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
    target: 'electron-renderer',
    mode: 'development',
    devtool: 'inline-source-map',
    entry: `./src/renderer.ts`,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};