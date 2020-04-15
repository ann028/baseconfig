module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 9000,
    proxy: {
      "/api": {
        target: "http://118.190.84.130:9080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};