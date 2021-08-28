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
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
              plugins: ['babel-plugin-transform-typescript-metadata',
                [
                  '@babel/plugin-proposal-decorators',
                  {
                    legacy: true
                  }
                ]
              ]
            }
          }
          , '@aurelia/webpack-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.html$/i,
        use: {
          loader: '@aurelia/webpack-loader',
          options: {useCSSModule: true}
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer']
              }
            }
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

export default config;