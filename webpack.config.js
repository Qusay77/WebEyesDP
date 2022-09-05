/* eslint-disable */
const { merge } = require('webpack-merge');
const modeConfiguration = (env) => require(`./build-utils/webpack.${env}`)(env);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);
  const envPath = mode ? `.env.${mode}` : '.env';
  return merge(
    {
      mode,
      entry: './src/index.js',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // set to true if you want JS source maps for css
          }),
          new OptimizeCSSAssetsPlugin({}),
        ],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
          {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: [
              {
                loader: 'url-loader?limit=100000',
              },
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new Dotenv({
          path: envPath,
        }),
      ],
    },
    modeConfiguration(mode),
  );
};
