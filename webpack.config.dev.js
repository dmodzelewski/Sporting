/* eslint-disable no-undef */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  devtool: "cheap-source-map",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/distDev"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    disableHostCheck: true,
    https: false,
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: "index.html",
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              eslintPath: "eslint",
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [require("autoprefixer")];
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
