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
<p>
How Bundle do Code-Splitting :-
<ol>
<li>
Entry Point Splitting (Multiple Entry Files): You can specify multiple entry points, and the bundler will create separate bundles for each entry. This method is useful when you have different parts of the site that are independent of each other, like an admin panel and a user-facing site.
<br />
<code>module.exports = {
  entry: {
    app: './src/app.js',
    admin: './src/admin.js'
  },
  output: {
    filename: '[name].bundle.js',  // 'app.bundle.js' and 'admin.bundle.js' will be created
    path: __dirname + '/dist'
  }
};</code>
</li>
<li>
Dynamic Imports (Lazy Loading): Dynamic imports allow you to load JavaScript modules asynchronously, meaning parts of your application are loaded only when needed. Most modern bundlers support dynamic imports through the import() function, which returns a Promise that resolves when the module is loaded.</li>
</ol>
</p>

</li>
<li>
<h4>Tree Shaking</h4>
<p>
Tree shaking is a powerful optimization technique used by modern JavaScript bundlers (like Webpack, Rollup, and Parcel) to remove unused or "dead" code from your final bundle. Its primary goal is to reduce the size of the JavaScript files sent to the browser by eliminating parts of the code that are never referenced or executed.</p>
<p>How Tree Shaking Works : <br />
Tree shaking relies on the static analysis of the code, particularly the ES6 (ES2015) module system (i.e., import and export). It determines which parts of the code are being used and which are not. Since ES6 modules are statically analyzable, the bundler can know at build time exactly which functions, variables, or classes are imported and used, allowing it to safely remove the unused parts.</p>
</li>
</ol>


