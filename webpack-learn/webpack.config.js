const webpack = require('webpack'); // 注意引入
const path = require('path'); // Node.js内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./app/main.js",//已多次提及的唯一入口文件
  devtool: 'eval-source-map',
  output: {
    filename: "bundle.js",//打包后输出文件的文件名
    path: path.resolve(__dirname, 'build') //打包后的文件存放的地方。__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'), //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    historyApiFallback: true, // 不跳转
    inline: true, //实时刷新
    hot: true // 配置热加载
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
              localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./app/index.tmpl.html") //new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ],
}