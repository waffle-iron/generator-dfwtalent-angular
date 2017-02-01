var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var relativepath = '';

module.exports = {
    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'main': ['./client/main.ts']
    },
    output: {
        path: helpers.root('dist', 'client'),
        filename: '[name].[hash].js',
        chunkFilename:'[id].[hash].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: './node_modules',
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=/assets/[name].[hash].[ext]'
        }, {
            test: /\.scss$/,
            exclude: helpers.root('client', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {

            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.scss$/,
            include: helpers.root('client', 'app'),
            loader: 'raw'
        }]
    },
    htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
            [/#/, /(?:)/],
            [/\*/, /(?:)/],
            [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/],
        root: helpers.root('client', ''),
        attrs: ['img:src', 'link:href', 'source:src', 'video:poster']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['main', 'vendor', 'polyfills'],
        }),
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.NODE_ENV || 'development'),
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                keep_fnames: true
            }
        }),
    ]
};