module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "../" : "/",
  assetsDir: "./",
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 3000,
    stats: {
      normal: true
    }
  },
  configureWebpack: {
    mode: "production",
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          loader: "yaml-loader",
          type: "json"
        }
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
};
