const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: ['./src/js/index.js', './src/sass/styles.scss', './src/sass/mixins.scss'],
  output: {
    filename: './js/app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("css/styles.css"),
    new PrettierPlugin(),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '95-100'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: [
        	path.resolve(__dirname, 'src/sass')
        ],
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader",
              options: {
              }
            },
            {
              loader: "sass-loader",
              options: {
              }
            }
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
	      options: {
            outputPath: './img',
            publicPath: '../img',
            name: '[name].[ext]',
          },   
        }]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: './fonts',
            publicPath: '../fonts',
            name: '[name].[ext]',
          },
        }]
      }      
    ]
  }
};