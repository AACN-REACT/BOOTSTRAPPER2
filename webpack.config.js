
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {


                mode: "development",
                entry: './src',
                output: {
                        path: path.resolve(__dirname,"dist"),
                        filename: '[name].bundle.js'
                },
                module: {

                    rules: [
                        {
                            test: /\.s?css$/,
                            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                        },
                        
                        
                        {
                        test:/\.jsx?$/,
                        use:{ loader:'babel-loader', options: {
                            presets:['@babel/preset-env', '@babel/preset-react']
                        }},

                        {
                            test:/\.jpe?g/,
                            use:["url-loader"]
                        }
                    },

                    ]
                },
                plugins: [
                    new HtmlWebpackPlugin({template: 'public/index.html'}),
                    new MiniCssExtractPlugin()
                ]






}