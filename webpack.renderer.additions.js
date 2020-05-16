const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ //
      title: "Tabur",
      template: "src/renderer/index.html",
      hash: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["postcss-loader"],
      }
    ]
  }
}