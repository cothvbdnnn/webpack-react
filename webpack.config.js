const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const vendorLibs = [
  'react',
  'react-dom'
]

module.exports = {
  mode: 'development',
  entry :
  {
    app: "./src/index.js",
    vendor: vendorLibs
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'caches',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' }},
          { loader: 'file-loader', options: { name: 'css/[name].[hash].css' }},
          { loader: 'sass-loader', options: { sourceMap: true }}
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: 'file-loader', options: { name: 'img/[name].[ext]' }}
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
}