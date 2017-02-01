var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    devtool: "source-map",
    entry: {
        'polyfills': './client/polyfills.ts',
        'vendor': './client/vendor.ts',
        'main': './client/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: [
                './node_modules',
                './dist'
            ],
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|jpg|gif|svg|mp4|woff|woff2|ttf|eot|ico)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1000&name=assets/[name].[hash].[ext]'
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
            loaders: ["style", "css", "sass"]
        }]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: helpers.root('client', ''),
        attrs: ['img:src', 'link:href', 'source:src', 'video:poster']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ // this will optimize the common code
            names: ['main', 'vendor', 'polyfills'],
        }),
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        }),
        new CopyWebpackPlugin([
            { from: 'client/assets/images/', to: 'assets/images/' },
            { from: 'client/assets/lib/', to: 'assets/lib/' },
            { from: 'client/assets/static/', to: 'assets/static/' }
        ]),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.NODE_ENV || 'development'),
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        },
        contentBase: "./client",
        stats: 'minimal',
        proxy: {
            '/api/**': {
                target: 'http://localhost:9000'
            }
        }
    }
};