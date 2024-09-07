Small Example of webpack bundler -:

// Create webpack.config.js file

<code>
module.exports = {
  entry: './src/index.js',  // entry point of the application
  output: {
    path: __dirname + '/dist',  // output directory
    filename: 'bundle.js'  // name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // use babel-loader for all JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,  // use css-loader and style-loader for CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
</code>
<hr />

