'use strict'
const fs = require('fs')
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
vueLoaderConfig.loaders.html = path.resolve(__dirname, 'static-cdn-loader')
/*
vueLoaderConfig.loaders.scss.push({
  loader: path.resolve(__dirname, 'scss-cdn-loader')
})
*/
// console.log('vueLoaderConfig', vueLoaderConfig.loaders)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const project = require('./webpack.project')
let projectEntry = null

if (!project) {
  console.log('没有指定项目名称！\n\n npm run dev vue-xxx-xxx\n')
  process.exit(0)
  return false
} else {
  projectEntry = resolve(`src/projects/${project}/app.js`)
  if (fs.existsSync(projectEntry)) {
    console.log(`Project Entry: > ${projectEntry}\n`)
  } else {
    console.log(`文件：${projectEntry} 并不存在！\n`)
    process.exit(0)
    return false
  }
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: projectEntry
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('assets'),
      'swiper$': 'swiper/dist/js/swiper.js',
      '@components': path.join(__dirname, '..', '..', 'vue-components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.scss$/,
        loader: path.resolve(__dirname, 'scss-cdn-loader'),
        // options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
