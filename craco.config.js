/* craco.config.js */
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CracoLessPlugin = require('craco-less')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', style: true }]

    ]
  },
  webpack: {
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 1024,
        minRatio: 0.8
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new AntdDayjsWebpackPlugin()
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // 此处根据 less-loader 版本的不同会有不同的配置，详见 less-loader 官方文档
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#F44600'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
