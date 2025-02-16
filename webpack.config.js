const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: './index.js',  // Точка входа на index.js
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,  // Обработка HTML
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Указываем шаблон HTML файла
      filename: "index.html",   // Имя выходного файла
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 9000,
    open: true,
  },
};
