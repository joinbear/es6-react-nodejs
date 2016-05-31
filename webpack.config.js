
// module.exports = function(webpackConfig) {
//   webpackConfig.babel.plugins.push('antd');
//   return webpackConfig;
// };

/**
 * [webpack --display-error-details --progress --colors --watch] 当报错，显示错误明细
 * @type {[type]}
 */
var 
  webpack       = require('webpack'),
  src_path      = __dirname + '/src/quick-sell/entry/',
  dest_path     = __dirname + '/src/dest/quick-sell/',
  commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    app : src_path + "index.jsx"
  },
  output: {
    path: dest_path,
    filename: "[name].min.js"
  },
  module: {
    loaders: [
      // => "style" and "css" loader is used for ".css" files
      // Alternative syntax:
      { 
        test: /\.css$/, 
        loaders: ["style", "css"] 
      },
      // png
      { 
        test: /\.png$/,
        loader: "url-loader",
        query: { 
          mimetype: "image/png"
        } 
      },
      // js
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }, 
      // jsx
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      // sass 
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  resolve: {
    // tell webpack to look for required files in node
    modulesDirectories: [
      'node_modules'
    ],
    extensions:['','.js','.jsx']
  },
  plugins: [
    commonsPlugin,
    new webpack.NoErrorsPlugin()
  ]
};