Step X - VueJS
==============

#### webpack.config.dev.js

> update module.loaders : 

```javascript

            {
                test: /\.vue$/,
                loader: 'vue'
            },

            {
                test: /\.html$/,
                loader: 'vue-html'
            },
> update plugins : add HTML Webpack Plugin to 

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');

...

plugins: [
    new HtmlWebpackPlugin({
        'template': './src/index.html'
    })
],
```

> update resolve : add .vue extension

```javascript
resolve: {
    extensions: ['', '.js', '.vue'],
    ...
```
