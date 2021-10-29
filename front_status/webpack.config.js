const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: ["@babel/polyfill", "./src/index.js"],
  entry: "./src/App.js",
  mode: "development",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
  },
  target: "web",

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    liveReload: true,
    static: {
      directory: path.join(__dirname, "/"),
      watch: true,
    },
    watchFiles: {
      paths: ["src/*.ts"],
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
