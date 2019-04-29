const webpack = require('webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    entry: SRC_DIR + '/app.jsx',
    output: {
      filename: 'bundle.js',
      path: DIST_DIR
    },
    module: {
      rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react', '@babel/preset-env']
              }
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.s[a|c]ss$/,
            loader: 'sass-loader!style-loader!css-loader'
        },
        {
            test: /\.(jpg|png|gif|jpeg|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }
      ]
    }
   };
