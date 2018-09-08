const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
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
      template: "./index.html"
    })
  ],
  devServer: {
    publicPath: "/dist/",
    port: 9000
  }
}
