const path=require( 'path');
//npm i --save webpack webpack-cli css-loader style-loader sass-loader node-sass
//npm install webpack-dev-server -D
//npm install css-loader html-webpack-plugin mini-css-extract-plugin -D
module.exports = {
    entry: './src/main.js',               // 入口文件
    output: {
        path:path.resolve(_dirname,'dist'),
        filename: 'bundle.js'
    },              // 出口文件
    module: {
        rules: [{
            // 格式
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ],
        },
        // { test: /\.ts$/, use: 'ts-loader' },
        {
            test: /\.(sass|scss)$/,
            //順序是由下到上 sass > css > style
            use: [
                'css-loader',
                'sass-loader'
            ],
        },{
            // test: /\.(js|jsx)$/,
            // use: 'babel-loader'
          }
    ]
    },              // 處裡對應模組
    plugins:[
    // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],             // 對應的插件

    devServer: { 
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      },           // 服務器配置
    mode: 'development'      // 開發模式配置
}