const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const config = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/detail.html",
      template: "./src/pages/detail.html",
      inject: "body",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "pages/search.html",
      template: "./src/pages/search.html",
      inject: "body",
      chunks: ["search"],
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/pages/detail.html",
    //   inject: "body",
    // }),
  ],
});
