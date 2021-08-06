import * as path from 'path'
import * as webpack from 'webpack'
import * as TerserJSPlugin from 'terser-webpack-plugin'
import * as CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js', //se agrega identificador
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
  },
};
