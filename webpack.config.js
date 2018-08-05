const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const name = 'app';

module.exports = {
  devtool: 'source-map',
  entry: "./src/App.js",
  output: {
    chunkFilename: 'assets/js/[name].chunk.js',
    filename: `assets/js/${ name }.bundles.[hash:20].min.js`,
    path: path.resolve(__dirname, '_prod')
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ 'babel-preset-env' ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};