var webpack = require('webpack');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var relativepath = 'manage/';

module.exports = {
    output: {
        path: helpers.root('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'client/assets/images/', to: 'client/assets/images/' },
            { from: 'package.json', to: 'package.json' },
            { from: 'yarn.lock', to: 'yarn.lock' },
            { from: 'server/**/*' }
        ])
    ]
};