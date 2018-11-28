const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    context: __dirname,
    entry: ['./src/scripts/index.tsx', './src/styles/main.scss'],
    devtool: isProd ? false : 'eval-source-map',
    output: {
      publicPath: path.join(__dirname, 'public'),
      path: path.join(__dirname, 'public/assets'),
      filename: 'scripts/app.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 8080,
      hot: true,
      historyApiFallback: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: 'pre',
          use: [
            {
              loader: 'tslint-loader',
              options: { tsConfigFile: 'tsconfig.json' }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        },
        {
          test: /\.scss$/,
          use: [
            { loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader' },
            { loader: 'css-loader', options: { sourceMap: !isProd } },
            { loader: 'postcss-loader', options: { sourceMap: !isProd } },
            { loader: 'sass-loader', options: { sourceMap: !isProd } }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['public'], { exclude: ['index.html'] }),
      new CopyWebpackPlugin([{ from: 'src/images/', to: 'images/' }, { from: 'src/fonts/', to: 'fonts/' }]),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
      new MiniCssExtractPlugin({ filename: 'styles/main.css' }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new WriteFilePlugin()
    ]
  };
};
