import * as path from 'path';
import {Configuration} from "webpack";
import {merge} from 'webpack-merge';
import common from './webpack.common';

const config = merge<Configuration>(common,
    {
      mode: 'production',
      // IMPORTANT: Configure server to disallow access to source maps from public!
      devtool: 'source-map',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
      }
    });

export default config;