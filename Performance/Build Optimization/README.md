<h2>Small Example of webpack bundler -:</h2>

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

<h2>Optimization</h2>
<h3>Customer Experience</h3>
<ol>
<li>
<h4>Code Splitting</h4>
<p>
Code splitting is a technique used by bundlers to break down your code into smaller chunks or bundles, which can be loaded on demand. Instead of loading the entire JavaScript file upfront, code splitting allows the browser to load only the necessary parts of your application, improving performance, especially for large applications. This reduces initial load time and improves user experience by optimizing resource loading.</p>
</li>
</ol>


