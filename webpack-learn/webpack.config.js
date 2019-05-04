const path = require('path'); // Node.js内置模块

module.exports = {
  entry: "./app/main.js",//已多次提及的唯一入口文件
  devtool: 'eval-source-map',
  output: {
    filename: "bundle.js",//打包后输出文件的文件名
    path: path.resolve(__dirname, 'public') //打包后的文件存放的地方。__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
    historyApiFallback: true, // 不跳转
    inline: true //实时刷新
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}