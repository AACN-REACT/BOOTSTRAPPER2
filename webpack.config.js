
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {

                entry: './src',
                output: {
                        path: __dirname+"/dist",
                        filename: '[name].bundle.js'
                },
                module: {
                    rules: [ {
                        test:/\.jsx?$/,
                        use:{ loader:'babel-loader'}
                    }
                    ]
                }






}