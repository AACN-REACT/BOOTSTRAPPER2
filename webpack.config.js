
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {


                mode: "development",
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
                },
                plugins: [
                    new HtmlWebpackPlugin()
                ]






}