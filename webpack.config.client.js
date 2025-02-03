const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

dotenv.config();

const mode = process.env.NODE_ENV ?? "production";
const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT;

module.exports = {
  name: "client",
  entry: "./src/client/index.tsx",
  mode,
  devtool: isDev ? "eval-source-map" : undefined,
  stats: "errors-only",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                minify: !isDev,
              },
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.ico$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.scss$/, // Encuentra archivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS en lugar de inyectarlo
          "css-loader", // Procesa archivos CSS
          "sass-loader", // Compila archivos SCSS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/styles/[name].css", // Nombre del archivo CSS generado
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "public"), to: "assets" }],
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    // extensions: [".tsx", ".ts", ".js"],
    alias: {
      assets: path.resolve(__dirname, "src/client/assets/"),
    },
  },
  devServer: {
    hot: true,
    port: PORT,
    open: true,
    historyApiFallback: true,
  },
};
