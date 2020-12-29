let path = require('path')
let webpack = require('webpack')
module.exports = {
    entry: './js/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [

        ]
    },
    // 开启开发服务器
    devServer: {
        contentBase: './dist'
    }
};