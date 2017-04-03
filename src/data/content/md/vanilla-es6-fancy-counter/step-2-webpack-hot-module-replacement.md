Step 2 - Webpack and Live Reloading
===================================

#### Goal

To add **Webpack** and configure **Live Reloading**.

Resulting in the following behaviour:

 - When we modify the app's CSS, the page should not reload, instead the css should update without affecting the app's state.
   So if we start the counter, we should be able to edit the css and see the changes reflected in our browser while the counter continues to count.
   This functionality is called hot module replacement.
   
 - But when we modify the app's JavaScript, then the page should reload.
   We could use [webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware) to get hot module replacement working with JavaScript changes, 
   but we'd need to add JavaScript to the app specifically for this, which for the purpose of this project is not worth it.
   So for our JavaScript a simple reload on change is sufficient.

We will use **GNU Make** to serve Webpack Dev Server and build for distribution.

#### Resources

 * [Webpack - module bundler](https://webpack.github.io/)
 * [Live Reloading](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html).
 * [GNU Make](https://www.gnu.org/software/make/)

#### Code

Here's a snapshot of the full project at this point:
[https://github.com/neilrussell6/fancy-counter/tree/0.0.2](https://github.com/neilrussell6/fancy-counter/tree/0.0.2)

Webpack Config
--------------

> We will create 2 webpack config files, one for development and one for production.

#### Development config

> Our development config will be called `webpack-config.dev.js` and will be used only when serving the project during development.

So to get hot module replacement working if we start with a config that looks like this:

```javascript
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './src/styles/app.css',
        './src/styles/fancy-counter.css',
        './src/main',
        './src/view/fancy-counter.comp.js'
    ],
    output: {
        publicPath: '/',
        filename: 'main.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css!autoprefixer"
            }
        ]
    },
    devServer: {
        contentBase: "./src"
    }
};
```

and we run **webpack-dev-server** like this:

```bash
node_modules/webpack-dev-server/bin/webpack-dev-server.js
```

Then both JavaScript and CSS changes will prompt a complete reload of the page.

To get hot module replacement to work for CSS we need update our **webpack.config.js** as follows:

```javascript
module.exports = {
    entry: [
        ...
        'webpack-dev-server/client?http://localhost:8080', 
        // this bundles the client for webpack-dev-server and connects to the provided endpoint
        
        'webpack/hot/only-dev-server',
        // this bundles the client for hot reloading
        // the 'only-' part means to only hot reload for successful updates
        ...
```

and we also need to add the ```--hot``` command option when running **webpack-dev-server**, like this:

```bash
node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot
```

So now hot module replacement should work with CSS changes.

But it will also be trying to do hot module replacement for JavaScript changes, and we don't want that for this project.

So to get it to reload on JavaScript changes we need to add the ```--inline``` command option when running **webpack-dev-server**, making the full command look like this:

```bash
node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --inline
```

Regarding this Webpack Dev Server docs say this:
```--inline``` Inline the webpack-dev-server logic into the bundle.

Makefile changes
----------------

#### serve

> Runs webpack-dev-server with live reloading.
