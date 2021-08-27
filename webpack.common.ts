import * as path from 'path';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const srcPath = path.resolve(__dirname, 'src');

const config: Configuration = {
  entry: path.join(srcPath, 'main'),
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [srcPath, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: ['ts-loader', '@aurelia/webpack-loader'],
        exclude: /node_modules/
      },
      {
        test: /[/\\]src[/\\].+\.html$/i,
        use: {
          loader: '@aurelia/webpack-loader',
          options: { useCSSModule: true }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

export default config;