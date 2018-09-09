const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
            loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
            loader: "html-loader"
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "react-velopert",
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    port: 9000
  }
}
