const { resolve } = require('path');
// 将css打包成单独文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩css文件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 检查js代码
// const EslintWebpackPlugin = require('eslint-webpack-plugin');
// pwa
const WorkboxPlugin = require('workbox-webpack-plugin');
// 将第三方库引入项目
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const webpack = require("webpack");
// process.env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  // 将打包后的文件放在哪
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: [
          // 将js中的css单独打包
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // webpack 4配置
                // ident: 'postcss',
                // plugins: () = [
                //   require('postcss-preset-env')()
                // ]
                // webpack 5配置
                plugins: [require('postcss-preset-env')()],
              },
            },
          },
        ],
      },
      // 处理scss
      {
        test: /\.sass|scss$/,
        use: [
          // 将js中的css单独打包
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // webpack 4配置
                // ident: 'postcss',
                // plugins: () = [
                //   require('postcss-preset-env')()
                // ]
                // webpack 5配置
                plugins: [require('postcss-preset-env')()],
              },
            },
          },
          'sass-loader',
        ],
      },
      // 处理图片
      {
        test: /\.(png|gif|jpg|jpeg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: '[name].[hash:10].[ext]',
              outputPath: 'static/imgs',
              esModule: false,
            },
          },
        ],
        type: 'javascript/auto',
      },
      // 处理html中的图片
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // 处理其他资源
      { // 排除 css/js/html 资源
        exclude: /\.(css|js|html|sass|json|png|gif|jpg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'static/others',
        },
      },
      // {
      //   // webpack对js语法做检查
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   //  当一个文件需要加载多个loader时，指定谁先执行。
      //   enforce: 'pre',
      //   options: {
      //     // 自动修复 eslint 的错误
      //     fix: true,
      //   },
      // },
      // 处理js的兼容性
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示 babel 做怎么样的兼容性处理
          presets: [['@babel/preset-env', {
            // 按需加载
            useBuiltIns: 'usage',
            // 指定 core-js 版本
            corejs: { version: 3 },
            // 指定兼容性做到哪个版本浏览器
            targets: {
              chrome: '60',
              firefox: '60',
              ie: '9',
              safari: '10',
              edge: '17',
            },
          }]],
          // 开启 babel 缓存 // 第二次构建时，会读取之前的缓存
          cacheDirectory: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复 eslint 的错误
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 压缩 html 代码
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      // 命名打包后的文件
      filename: 'static/css/built.[contenthash:10].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    // new EslintWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),

    // 告诉webpack哪些库不参与打包，同时使用时的名称也得变~
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, 'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, 'dll/jquery.js'),
      publicPath: ''
    })
  ],
  mode: 'production',
  devtool: 'source-map',
  // 将node_modules中的包单端打包成一个chunk。如果没有第三方插件，他也会打包一个js文件27kb。
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // 将npm的包不打包经项目，可能已经使用了cdn
  // externals: {
  //   jquery: 'jQuery',
  // },
};
