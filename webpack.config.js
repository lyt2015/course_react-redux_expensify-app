const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          // use: ['style-loader', 'css-loader', 'sass-loader'],
          use: CSSExtract.extract({
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true,
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  }
}
