const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.resolve(root, 'src');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
          },
          'postcss-loader'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': srcDir,
      '@state': path.resolve(__dirname, '../src/state/'),
      '@routes': path.resolve(__dirname, '../src/routes/'),
      '@sharedComponents': path.resolve(__dirname, '../src/sharedComponents/'),
      '@customHooks': path.resolve(__dirname, '../src/customHooks/'),
      '@helpers': path.resolve(__dirname, '../src/helpers/'),
      '@styles': path.resolve(__dirname, '../src/styles/'),
      '@uiKit': path.resolve(__dirname, '../src/uiKit/'),
      '@constants': path.resolve(__dirname, '../src/constants.ts'),
      '@config': path.resolve(__dirname, '../src/config.ts'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};
