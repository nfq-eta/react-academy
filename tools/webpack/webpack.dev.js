const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge.strategy(
    {
        entry: 'prepend',
        plugins: 'prepend'
    }
)(CommonConfig, {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: 'react-hot-loader/patch'
    },

    watchOptions: {
        poll: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.SourceMapDevToolPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 5579,
        publicPath: '/',
        historyApiFallback: true,
        hot: true,
        inline: true,
        quiet: false,
        noInfo: false,
        compress: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }
});
