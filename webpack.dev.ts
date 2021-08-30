import {Configuration as WebpackConfiguration} from "webpack";
import {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";
import {merge} from 'webpack-merge';
import common from './webpack.common';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config = merge<Configuration>(common,
    {
      mode: 'development',
      devtool: 'eval-cheap-module-source-map',
      output: {
        pathinfo: true,
        publicPath: '/',
        filename: '[name].bundle.js'
      },
      devServer: {
        host: '0.0.0.0'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
          }
        ]
      }
    });

export default config;