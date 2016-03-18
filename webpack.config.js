var webpack = require('webpack'),
    AssetsPlugin = require('assets-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/entry.js',
    output: {
        path: __dirname + '/js/build',
        publicPath: '/js/build',
        filename: '[hash].bundle.js',
        chunkFilename: '[hash].bundle.js'
    },
    devtool: '#source-map',
    resolve: {
        extensions: ['', '.js', '.es6']
    },
    module: {
        loaders: [
            {
                test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel?presets[]=es2015", "eslint-loader"]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            mangle: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new AssetsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'js.include.html',
            template: 'js.include.template.html'
        })
    ],
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        'jquery': 'jQuery'
    },
    eslint: {
        configFile: '.eslintrc.yml',
        fix: true
    }
}



