const path = require('path')

const vendorLibs = [
  'react',
  'react-dom'
]

module.exports = {
  mode: 'development',
  entry : {
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 9000
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        use: [
          'style-loader',
          'css-loader'
        ],
        test: /\.css$/
      }
    ]
  }
}