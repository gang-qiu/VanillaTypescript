const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js','.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Testosterone',
    }),
  ],
  devtool: 'inline-source-map',
   devServer: {
    static: './dist',
    hot: true
  },
  output: {
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
