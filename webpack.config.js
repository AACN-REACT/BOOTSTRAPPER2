
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {


                mode: "development",
                entry: './src',
                output: {
                        path: path.resolve(__dirname,"dist"),
                        filename: '[name].bundle.js'
                },
                module: {
                    rules: [ {
                        test:/\.jsx?$/,
                        use:{ loader:'babel-loader', options: {
                            presets:['@babel/preset-env', '@babel/preset-react']
                        }}
                    }
                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({template: 'public/index.html'})
                ]






}