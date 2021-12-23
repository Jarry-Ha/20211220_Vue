const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrign: true,
        pathRewrite: {
          "/api": ""
        },
        logLevel: "debug"
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "node_modules"),
        "@": path.resolve(__dirname, "src")
      }
    }
  }
}