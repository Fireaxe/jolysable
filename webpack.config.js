module.exports = {
  mode: 'production',
  devServer: {
    proxy: 'http://jolysable-drupal/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader?name="[name]-[hash].[ext]'
      },
      {
        test: /\.ya?ml$/,
        loader: 'yaml-loader',
        type: 'json'
      }
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.runtime.esm.js'
      },
    },
  }
};
