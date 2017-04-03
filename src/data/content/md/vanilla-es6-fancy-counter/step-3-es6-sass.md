Step 3 - Babel, ES6 & SASS
==========================

#### Goal

To add **Babel** and convert all JavaScript to **ES6** and all CSS to **SASS**.

We will use **GNU Make** to serve Webpack Dev Server.

#### Resources

 * [Babel - JavaScript compiler](https://babeljs.io/)
 * [ES6 - 6th release of the ECMAScript language specification](https://babeljs.io/learn-es2015/)
 * [SASS - CSS extension language](http://sass-lang.com/)
 * [GNU Make](https://www.gnu.org/software/make/)

#### Code

Here's a snapshot of the full project at t  his point:
[https://github.com/neilrussell6/fancy-counter/tree/0.0.3](https://github.com/neilrussell6/fancy-counter/tree/0.0.3)

#### Code overview

So because we now have module loading we can remove the following from our **webpack.config.js**:

```diff
--- './src/styles/app.css',
--- './src/styles/fancy-counter.css',
--- './src/view/fancy-counter.comp.js'
```

And import them in our JavaScript.

**src/view/main.js**
```javascript
import './styles/app.css';
import * as JsCounter from "./view/fancy-counter.comp";
```

**src/view/fancy-counter.comp.js**
```javascript
import '../styles/fancy-counter.css';
```

And we can also remove the app.css link from our index.html.

```diff
--- <link rel="stylesheet" href="styles/app.css">
```

And also now that we are using a module loader we can remove the self executing anonymous function wrapper in our component JavaScript.

```diff
--- (function (){
...
--- })();
```
