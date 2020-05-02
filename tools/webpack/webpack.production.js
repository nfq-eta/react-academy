/* eslint-disable import/no-extraneous-dependencies */
// @flow
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge.strategy({
  plugins: 'prepend',
  output: 'merge',
})(CommonConfig, {
  devtool: false,
  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].min.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
});
