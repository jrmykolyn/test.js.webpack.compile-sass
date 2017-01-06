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
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
