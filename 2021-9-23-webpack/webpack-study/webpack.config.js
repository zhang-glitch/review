const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  // entry如果是一个对象，那么指定多少个入口文件，他就打包成几个chunk。
  // entry如果是一个数组，我们就将提供的文件打包在一个文件中。
  // entry: {
  //   // 这个就为同一类文件引入进一个chunk,提供了方便。
  //   index: ['./src/index.js', './src/mul.js'],
  //   add: './src/add.js'
  // },
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: resolve(__dirname, 'build'),
    // 就是将html中的资源路径前面加个“/”,一般用在生产环境
    // publicPath: '/'
    // 将非入口的chunk命名。例如：懒加载，optimization将第三方包打包
    chunkFilename: 'js/[name].[contenthash]_chunk.js',
    // // library： 将打包后的文件赋值给一个变量
    // library: '[name]',
    // // 将打包后的文件变量，挂载到window上。
    // libraryTarget: 'window'
    
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 打包图片，字体，其他资源文件

      {
        exclude: /\.(css|js|html|sass|json|png|gif|jpg|jpeg|scss)$/,
        type: "asset/resource",
        generator: {
          // 输出文件位置以及文件名
          filename: "fonts/[name][ext]"
        },
      },
      {
        //处理图片资源
        test: /\.(jpe?g|png|gif|)$/,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "images/[name][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 //超过10kb不转base64,然后就不会被打包
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, 'src/css')
  //   },
  //   // 默认可以省略.js, .json后缀
  //   extensions: ['.css']
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  //   // 将按需引入的文件,hashId在入口文件从取出，来做到缓存。
  //   runtimeChunk: {
  //     name: (entrypoint) => `runtime~${entrypoint.name}`,
  //   },
  // }
}


