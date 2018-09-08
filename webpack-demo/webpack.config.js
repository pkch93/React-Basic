const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports={
  mode: "development",
  entry: {
      app: "./src/index.js",
      print: "./src/print.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // HTML DOM 안에 style 태그 삽입
          "css-loader" // import, url로 css파일 불러오기
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins : [
    new HtmlWebPackPlugin({
      title: "Plugin Test"
    }),
    new CleanWebpackPlugin(["dist"])
    /*
      써볼 plugin : HtmlwebpackTemplate, WebpackManifestPlugin
      SplitChunkPlugin
    */
  ],
  devServer: {
    port: 9000
  }
};
