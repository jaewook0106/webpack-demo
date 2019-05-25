const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html 파일 생성

module.exports = {
  entry:'./src/index.js', // 진입점
  output:{
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },  // 출력점
  plugins:[
    new HtmlWebpackPlugin()
  ],
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]   // 실행 순서는 오른쪽부터 왼쪽으로 
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader' , 'sass-loader' ]
      }
    ]
  }
}  

