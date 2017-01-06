var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
    entry: './src/index',
    output: {
      filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', // 'fallback' loader;
                    'css!sass' // primary loader;
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin( 'styles.css' )
    ]
};
