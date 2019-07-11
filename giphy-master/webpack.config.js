module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
                test: /\.css$/
            }
        ]
    }
};