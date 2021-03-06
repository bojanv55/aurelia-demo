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
        use: ['@bojanv55/ts-loader', '@aurelia/webpack-loader'],
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
              modules: {
                exportLocalsConvention: 'dashes',
              },
              importLoaders: 1,
              sourceMap: true //to dev?
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